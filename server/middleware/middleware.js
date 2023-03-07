exports.bodyverifyToken = (req, res, next) => {
    
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split('');
        const bearerToken = bearer[1];
        console.log(bearerToken);

        jwt.verify(bearerToken, process.env.SECRETKEY, (err,body) => {
            if(err){
                res.sendStatus(401);
            }
            else{
                console.log(body);
                next();
            }
            
        });
    }
    else{
        res.sendStatus(403);
    }

}