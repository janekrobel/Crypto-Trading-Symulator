const nodeMailer = require("nodemailer");

exports.postLogin = (req, res) => {
    const email = req.body.email;
    const token = jwt.sign({ email }, process.env.SECRETKEY);
    const loginLink = `https://localhost:3001/login/link?key=${token}`;
    sendLoginEmail(email, loginLink).then(() => {
        res.send(true);
    });
};

exports.getLink = (req, res) => {
    const key = req.query.key;
    try {
        const { email } = jwt.verify(key,process.env.SECRETKEY);
        console.log("cookies");
        res.cookie('verification', key, { maxAge: 7200000 }).send('cookie set');
    }
    catch(err){
        res.send("Invalid login link");
    }
};

const sendLoginEmail = async(_to, link) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chiefspammer@yourgreatdomain.com',
          pass: 'SuperSecretPassword' // naturally, replace both with your real credentials or an application-specific password
        }
      });
      
    const mailOptions = {
        from: 'vindication@enron.com',
        to: _to,
        subject: 'Complete your login!',
        text: link
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    
    //add node mailer
}