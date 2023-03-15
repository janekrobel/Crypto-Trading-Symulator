const { response } = require("express");
const model = require("../models/userModel.js");

exports.getUserById = (request,response) => { 
    model.getUserById(request.query.id).then((result)=>{ response.json(result)});
}

exports.getUserByEmail = (request,response) => { 
    model.getUserByEmail(request.query.email).then((result)=>{ response.json(result)});
}

exports.createUser = (request,response) => { 
    model.createUser(request.body.email).then((result)=>{ response.json(result)});
}

exports.setUserBalance = (request,response) => { 
    model.setUserBalance(request.query.id, request.body.balance).then((result)=>{ response.json(result)});
}

exports.deleteUser = (request,response) => {
    model.deleteUser(request.query.id).then((result)=> {response.json(result);});
};

