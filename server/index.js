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

//const middleware = require('./middleware/middleware.js');

app.set('view engine', 'ejs');

dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/coins", coinRouting);
app.use("/users", userRouting);
app.use("/positions", positionRouting);

app.get('/', function(req, res) {
    res.render('link2');
  });
  
  // about page
app.get('/about', function(req, res) {
    res.render('link1');
});

app.use(cors({
    origin: '*'
}));

/*

app.post('/login', async (req,res) => {
    const email = req.body.email;
    const token = jwt.sign({ email }, process.env.SECRETKEY);
    const loginLink = `https://localhost:3001/login?key=${token}`;
    sendLoginEmail(email, loginLink).then(() => {
        res.send(true);
    });
});

app.get('/login', async (req, res) => {
    const { key } = req.query;
    try {
        const { email } = jwt.verify(key,process.env.SECRETKEY);
        console.log("cookies");
        res.cookie('verification', key, { maxAge: 7200000 }).send('cookie set');
    }
    catch(err){
        res.send("Invalid login link");
    }
});


const sendLoginEmail = async(_to, link) =>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: _to,
        from: 'theblockchainpizza@gmail.com',
        subject: 'Log in link',
        text: 'Thank you for your attention,',
        html: `<a href="${link}">click here to log in</a>`,
      };
    sgMail.send(msg).then(() => {
        console.log('Email sent successfully');
    })
    .catch((error) => {
        console.error(error);
    });
}

app.post('/getToken', (req,res) => {
    const email = req.body.email;
    res.json(jwt.sign({ email }, process.env.SECRETKEY));
});

app.get('/getUser', middleware.verifyToken , (req,res) => {
});
*/




app.listen(3001); 