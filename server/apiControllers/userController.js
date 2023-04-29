const model = require("../models/userModel.js");

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
    let image = req.body.img;
    const imageBuffer = Buffer.from(image, 'base64')
    let imageId = uuid.v4();
    const jpegBuffer = await sharp(imageBuffer).resize(624, 624).toFile('output.webp');                     
    const jpegFileName = `${imageId}.webp`;
    await fs.promises.writeFile("../images/" + jpegFileName, jpegBuffer);

    user = {
        email : req.email,
        img : imageId,
        bio: req.body.bio
    }

    model.setUser(user).then((result)=>{ res.json(result)});
}

exports.deleteUser = (req,res) => {
    model.deleteUser(req.query.id).then((result)=> {res.json(result)});
};

