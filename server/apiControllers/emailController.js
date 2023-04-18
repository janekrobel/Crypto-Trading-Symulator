const nodeMailer = require("nodemailer");

exports.sendLoginEmail = async(_to, link) =>{
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'tradingsymulatorproject@gmail.com',
          pass: process.env.EMAIL
        }
      });
      
    const mailOptions = {
        from: 'tradingsymulatorproject@gmail.com',
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
