const jwt = require('jsonwebtoken');

exports.bodyverifyToken = (req, res, next) => {
    
    const authCookie = req.cookies.verification;

    if(typeof authCookie !== 'undefined'){
        jwt.verify(authCookie, process.env.SECRETKEY, (err,body) => {
            if(err){
                res.sendStatus(401);
            }
            else{
                req.email = body.email;
                next();
            }
            
        });
    }
    else{
        res.redirect('/login');
    }

}