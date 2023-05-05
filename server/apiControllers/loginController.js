const jwt = require('jsonwebtoken');
const accountModel = require('../models/userModel');
const emailController = require('./emailController.js');


exports.postLogin = (req, res) => {
    accountModel.getUserByEmail(req.body.email).then((result)=>{
        if(typeof(result) === 'undefined'){
            console.log("new");
            accountModel.createUser(req.body.email).then((result)=>{
                const email = req.body.email;
                const now = new Date();
                const date = now.toLocaleString('en-US', { timeZone: 'UTC' });
                console.log(date);
                const token = jwt.sign({ email, date}, process.env.SECRETKEY);
                const loginLink = `http://localhost:3001/login/link?key=${token}`;
                emailController.sendLoginEmail(email, loginLink).then(() => {
                    res.send(true);
                });
            });
        }
        else{
            const email = req.body.email;
            const now = new Date();
            const date = now.toLocaleString('en-US', { timeZone: 'UTC' });
            console.log(date);
            const token = jwt.sign({ email , date}, process.env.SECRETKEY);
            const loginLink = `http://localhost:3001/login/link?key=${token}`;
            emailController.sendLoginEmail(email, loginLink).then(() => {
                res.send(true);
            });
        }           
    });
};

exports.getLink = (req, res) => {
    const key = req.query.key;
    try {
        const { email, date } = jwt.verify(key,process.env.SECRETKEY);
        const now = new Date();
        console.log(date);
        const linkDate = new Date(Date.parse(date));
        const timeDiff = now.getTime() - linkDate.getTime();
        console.log(timeDiff);
        if(timeDiff > 72000000){
            res.sendStatus(403);
        }
        else{
            console.log("cookies");
            res.cookie('verification', key, { maxAge: 7200000 });
            res.redirect("/");
        }
    }
    catch(err){
        console.log(err);
        res.send("Invalid login link");
    }
};
