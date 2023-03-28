const nodeMailer = require("nodemailer");

const sendLoginEmail = (_to, link) =>{
    const transporter = nodeMailer.createTransport({
        host: 'smtp.swissmail.org',
        port: 587,
        secure: false,
        auth: {
          user: 'cryptotradingsymulator@email.ch',
          pass: 'Robelkowo2017' //add to .env
        }
      });
      
    const mailOptions = {
        from: 'cryptotradingsymulator@email.ch',
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
}


// sendLoginEmail("stachu1012@gmail.com" , "działam");
