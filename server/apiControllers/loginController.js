const jwt = require('jsonwebtoken');
const accountModel = require('../models/userModel');
const emailController = require('./emailController.js');


exports.postLogin = (req, res) => {
    accountModel.getUserByEmail(req.body.email).then((result)=>{
        if(typeof(result) === 'undefined'){
            console.log("new");
            accountModel.createUser(req.body.email)
        }
                const email = req.body.email;
                const now = new Date()
                console.log("NOW: ", now)
                
                const date = now.toLocaleString('en-US', { timeZone: 'UTC' });
              
                const token = jwt.sign({ email, date}, process.env.SECRETKEY);
                const loginLink = `http://localhost:3001/login/link?key=${token}`;
                emailController.sendLoginEmail(email, loginLink).then(() => {
                    res.redirect('/')
                });         
    });
};

exports.getLink = (req, res) => {
    const key = req.query.key;
    try {
        const { email, date } = jwt.verify(key, process.env.SECRETKEY);
        const now = new Date();
            console.log("NOW DATE = " , now);
        const linkDate = new Date(date);
            console.log("LINK DATE Z PARSEM =", linkDate)
        const timeDiff = now.getTime() - linkDate.getTime();
            console.log("TIME DIFF = ", timeDiff);
        if(timeDiff < 7200000){
            console.log("cookies");
            res.cookie('verification', key, { maxAge: 7200000 });
            res.redirect("/");
        }
        else{
          res.sendStatus(403);
        }
    }
    catch(err){
        console.log(err);
        res.send("Invalid login link");
    }
};
