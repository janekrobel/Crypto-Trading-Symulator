const jwt = require('jsonwebtoken');
const accountModel = require('../models/userModel');
const emailController = require('./emailController.js');


exports.postLogin = (req, res) => {
    accountModel.getUserByEmail(req.body.email).then((result)=>{
        if(typeof(result) === 'undefined'){
            console.log("new");
            accountModel.createUser(req.body.email).then((result)=>{
                const email = req.body.email;
                const token = jwt.sign({ email }, process.env.SECRETKEY);
                const loginLink = `http://localhost:3001/login/link?key=${token}`;
                emailController.sendLoginEmail(email, loginLink).then(() => {
                    res.send(true);
                });
            });
        }
        else{
            const email = req.body.email;
            const token = jwt.sign({ email }, process.env.SECRETKEY);
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
        const { email } = jwt.verify(key,process.env.SECRETKEY);
        console.log("cookies");
        res.cookie('verification', key, { maxAge: 7200000 });
        res.redirect("/");
    }
    catch(err){
        res.send("Invalid login link");
    }
};
