const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const cookieParser = require('cookie-parser');
const userRouting = require('./routings/userRouting.js');
const positionRouting = require('./routings/positionRouting.js');
const coinRouting = require('./routings/coinRouting.js');
const coinController = require('./apiControllers/coinController');
//const middleware = require('./middleware/middleware.js');

app.set('view engine', 'ejs');

app.use();

dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/coins", coinRouting);
app.use("/users", userRouting);
app.use("/positions", positionRouting);

app.get('/', function(req, res) {
    //add css
    //_account
    let _account ="";
    let _coins = coinController.getAllCoins;
    res.render('main', {
        coins:_coins,
        account:_account,
     } );
  });
  

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res) {
    const email = req.body.email;
    const token = jwt.sign({ email }, process.env.SECRETKEY);
    const loginLink = `https://localhost:3001/loginlink?key=${token}`;
    sendLoginEmail(email, loginLink).then(() => {
        res.send(true);
    });
});

app.get('/loginlink', async (req, res) => {
    const key = req.query.key;
    try {
        const { email } = jwt.verify(key,process.env.SECRETKEY);
        console.log("cookies");
        res.cookie('verification', key, { maxAge: 7200000 }).send('cookie set');
    }
    catch(err){
        res.send("Invalid login link");
    }
});

app.use(cors({
    origin: '*'
}));

const sendLoginEmail = async(_to, link) =>{
    //add node mailer
}




app.listen(3001); 