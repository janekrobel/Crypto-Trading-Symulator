const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

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

dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/coins", coinRouting);
app.use("/users", userRouting);
app.use("/positions", positionRouting);
app.use("/login", loginRouting);

//app.get('/', middleware.bodyverifyToken, (req,res) => {
    //let _postitions = positionModel.getPositionsByUserEmail(req.email);

app.get('/', async (req,res) => {
    let _positions = await positionModel.getPositionsByUserEmail("robelkowo@gmail.com");
    let _account = await userModel.getUserByEmail("robelkowo@gmail.com");
    let _coins = await coinModel.getAllCoins(); 
    let _totalValue = await positionModel.getValueOfAllPositionsByEmail("robelkowo@gmail.com");
    let _totalBalance = _totalValue + _account.balance    
    res.render('index',{
        positions:_positions,
        coins:_coins,
        account: _account,
        totalValue:_totalValue,
        totalBalance: _totalBalance
    })
  });
  

app.use(cors({
    origin: '*'
}));


app.listen(3001); 