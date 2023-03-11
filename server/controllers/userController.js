const model = require("../models/userModel.js");

exports.getUserById = (request,response) => { 
    response.json(model.getUserById(request.query.id));
}

exports.getUserByEmail = (request,response) => { 
    response.json(model.getUserByEmail(request.query.email));
}

exports.createUser = (request,response) => { 
    response.json(model.createUser(request.body.email));
}

exports.getUserBalance = (request,response) => { 
    response.json(model.getUserBalance(request.query.id));
}

exports.setUserBalance = (request,response) => { 
    response.json(model.setUserBalance(request.query.id, request.body.balance));
}

