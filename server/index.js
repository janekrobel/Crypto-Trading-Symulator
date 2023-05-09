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
const positionController = require('./apiControllers/positionController.js');
const userModel = require('./models/userModel.js');
const coinModel = require('./models/coinModel.js');
const nodemailer = require('nodemailer');
const middleware = require('./middleware/middleware.js');
// const UPDATECOINSJOB = require('./updateCoins.js');

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
    let _totalValue = positionController.getTotalValue(req.email);
    
    Promise.all([_positions,_account,_coins,_totalValue]).then((result)=>{
        let positions = result[0];
        let account = result[1];
        let coins = result[2];
        let totalValue = result[3].totalValue;
        let totalBalance = result[3].totalBalance;
        let message = req.query.message || null;
        let errorMesage = req.query.errorMessage || null;

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

app.get('/user', middleware.bodyverifyToken, async (req, res) => {
    let user = await userModel.getUserByEmail(req.email);
    res.render('form', message="", errorMessage="", totalBalance="", account=user);
});







app.listen(3001); 