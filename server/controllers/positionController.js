const model = require("../models/positionModel.js");

exports.getPositionsByUserId = (request, response) => {
    model.getPositionsByUserId(request.query.userId).then((result)=>{ response.json(result)});
}

exports.createPositions = (request, response) => {
    model.createPositions(request.body.id_user, request.body.amountid_coin, request.body.price, request.body.amount, request.body.date, request.body.type).then((result)=>{ response.json(result)});
}

exports.closePosition = (request, response) => {
    model.closePosition(request.query.id).then((result)=>{ response.json(result)});
}