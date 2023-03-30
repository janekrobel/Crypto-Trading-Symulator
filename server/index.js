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

app.get('/', middleware.bodyverifyToken, (req,res) => {
    let _postitions = positionModel.getPositionsByUserEmail(req.email);
    console.log(_postitions);
    let _account ={};
    let _coins = coinModel.getAllCoins();
    Promise.all([_postitions,_coins]).then((results)=>{
        res.render('index', {
            coins:results[1],
            positions:results[0]
         });
    }).catch((err)=>{
        res.sendStatus(404);
    })
    
    
  });
  

app.use(cors({
    origin: '*'
}));


app.listen(3001); 