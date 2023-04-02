const nodeMailer = require("nodemailer");

exports.sendLoginEmail = async(_to, link) =>{
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'cryptotradingsymulator@gmail.com',
          pass: 'fxmxnjmbfuosybba' //add to .env
        }
      });
      
    const mailOptions = {
        from: 'cryptotradingsymulator@gmail.com',
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
