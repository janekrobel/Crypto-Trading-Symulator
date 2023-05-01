const model = require("../models/userModel.js");
const uuid = require('uuid')
const sharp = require('sharp')

exports.getUserById = (req,res) => { 
    model.getUserById(req.query.id).then((result)=>{ res.json(result)});
}

exports.getUserByEmail = (req,res) => { 
    model.getUserByEmail(req.query.email).then((result)=>{ res.json(result)});
}

exports.createUser = (req,res) => { 
    model.createUser(req.body.email).then((result)=>{ res.json(result)});
}

exports.setUser = async (req,res) => { 
    let imageId = ""
    let image = req.file;
    if(typeof(image) != 'undefined'){
        console.log("FILE =" , image)
        // const imageBuffer = Buffer.from(image.buffer, 'base64')
        imageId = uuid.v4();
        let imageBuffer = image.buffer;
        
        await sharp(imageBuffer)
        .toFormat('webp')
        .toFile("./public/img/" + imageId , (err, info) => {
            if(err) throw err
            console.log("Dodano plik : " , imageId , '\n' ,info)
    })
    }
    


    // const jpegBuffer = await sharp(image.buffer).resize(624, 624).toFile('output.webp');                     
    // const jpegFileName = `${imageId}.webp`;
    // await fs.promises.writeFile("../images/" + jpegFileName, jpegBuffer);

    user = {
        email : req.email,
        img : imageId,
        about: req.body.bio
    }

    model.setUser(user)
        .then((result)=>{ res.redirect("/")});
}

exports.deleteUser = (req,res) => {
    model.deleteUser(req.query.id).then((result)=> {res.json(result)});
};

