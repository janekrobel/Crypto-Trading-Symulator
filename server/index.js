const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser');
const userRouting = require('./routings/userRouting.js');
const positionRouting = require('./routings/positionRouting.js');
const coinRouting = require('./routings/coinRouting.js');
const loginRouting = require('./routings/loginRouting.js');
const positionModel = require('./models/positionsModel.js');
const userModel = require('./models/userModel.js');
const coinModel = require('./models/coinModel.js');
const nodemailer = require('nodemailer');
const middleware = require('./middleware/middleware.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: '*'
}));


app.use("/coins", coinRouting);
app.use("/users", userRouting);
app.use("/positions", positionRouting);
app.use("/login", loginRouting);

app.get('/', middleware.bodyverifyToken, (req,res) => {
    console.log(req.email);
    let _positions = positionModel.getPositionsByUserEmail(req.email);
    let _account = userModel.getUserByEmail(req.email);
    let _coins = coinModel.getAllCoins(); 
    let _totalValue = getTotalValue(req.email);
    
    Promise.all([_positions,_account,_coins,_totalValue]).then((result)=>{
        let positions = result[0];
        let account = result[1];
        let coins = result[2];
        let totalValue = result[3];
        let totalBalance = totalValue + account.balance
        let message = req.query.message || null;
        let errorMesage = req.query.errorMessage || null;

        totalValue = Math.round(totalValue * 1000)/1000
        totalBalance =  Math.round(totalBalance * 1000)/1000

        console.log("errorMsg", errorMesage);
        console.log("msg", message);

        res.render('index',{
            positions: positions,
            coins: coins,
            account: account,
            totalValue: totalValue,
            totalBalance: totalBalance,
            message: message,
            errorMessage: errorMesage
        })
    });
});

app.get('/user/:id', (req, res) => {
    
});


const getTotalValue = (email) => {
    return positionModel.getPositionsByUserEmail(email).then((positions)=>{
        return coinModel.getAllCoins().then((coinList)=>{
            let totalValue = 0;
            for(position of positions){
                let wspolczynnik = (position.type === "Long") ? -1 : 1
                let startPos = position.price * position.amounts;

                const isIndex = (element) => element.id === position.id_coin;
                
                let coinIndex = coinList.findIndex(isIndex);
                let coin = coinList[coinIndex];

                let currentValue = startPos - coin.price * position.amounts;
                let profit = currentValue * wspolczynnik;

                totalValue += profit + startPos;
                
            };
            return totalValue;
            
        });
    })
}




app.listen(3001); 