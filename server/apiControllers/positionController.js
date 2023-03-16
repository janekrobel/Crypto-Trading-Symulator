const model = require("../models/positionsModel.js");

exports.getPositionsByUserId = (request, response) => {
    model.getPositionsByUserId(request.query.userId).then((result)=>{ response.json(result)});
}

exports.createPositions = (request, response) => {
    model.createPositions(request.body).then((result)=>{ response.json(result)});
}

exports.closePosition = (request, response) => {
    model.closePosition(request.query.id).then((result)=>{ response.json(result)});
}

exports.setPosition = (request,response) => {
    model.setPosition(request.body).then((result)=>{{response.json(result)}});
}
