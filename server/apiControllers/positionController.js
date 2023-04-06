const model = require("../models/positionsModel.js");
const userModel = require("../models/userModel.js");

exports.getPositionsByUserEmail = (request, response) => {
    model.getPositionsByUserEmail(request.email).then((result)=>{ response.json(result)});
}

exports.createPositions = (request, response) => {
    //subtract from balance
    //check if balance is enough
    model.createPositions(request.body).then((result)=>{ response.json(result)});
}

exports.closePosition = (request, response) => {
    //add to balance
    //coinPrice * amounts
    model.closePosition(request.query.id).then((result)=>{ response.json(result)});
}

exports.setPosition = (request,response) => {
    model.setPosition(request.body).then((result)=>{{response.json(result)}});
}
