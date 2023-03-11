const model = require("../models/positionModel.js");

exports.getPositionsByUserId = (request, response) => {
    response.json(model.getPositionsByUserId(request.query.userId));
}

exports.createPositions = (request, response) => {
    response.json(model.createPositions(request.body.id_user, request.body.amountid_coin, request.body.price, request.body.amount, request.body.date, request.body.type));
}

exports.closePosition = (request, response) => {
    response.json(model.closePosition(request.query.id));
}