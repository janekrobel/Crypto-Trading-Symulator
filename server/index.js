const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const cookieParser = require('cookie-parser');
const userRouting = require('./routings/userRouting.js');
const positionRouting = require('./routings/positionRouting.js');
const coinRouting = require('./routings/coinRouting.js');
const loginRouting = require('./routings/loginRouting.js');
const coinController = require('./apiControllers/coinController');
const nodemailer = require('nodemailer');
//const middleware = require('./middleware/middleware.js');

app.set('view engine', 'ejs');

dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/coins", coinRouting);
app.use("/users", userRouting);
app.use("/positions", positionRouting);
app.use("/login", loginRouting);

app.get('/', (req,res) => {
    //add css
    //_account
    let _account ={};
    //let _coins = coinController.getAllCoins();
    let _coins = "";
    _coins = [
        {
            "symbol": "ETH",
            "name": "ETHEREUM",
            "price": 1222.22,
            "volume": 34322.11,
            "change":33.22,
            "marketCap":2344
        },
        {
            "symbol": "BTC",
            "name": "BITCOIN",
            "price": 234000.22,
            "volume": 94922.11,
            "change":45.23,
            "marketCap":8222
        }
    ]
    res.render('index', {
        coins:_coins,
        account:_account,
     });
  });
  

app.use(cors({
    origin: '*'
}));


app.listen(3001); 