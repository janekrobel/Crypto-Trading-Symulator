const model = require("../models/coinModel.js");

exports.getAllCoins = (request, response) => {
    response.json(model.getAllCoins());
}

exports.setPrice = (request, response) => {
    response.json(model.setPrice(request.body.price, request.query.id));
}

exports.getCoinById = (request, response) => {
    response.json(request.query.id);
}

exports.setMarketCap = (request, response) => {
    response.json(model.setMarketCap(request.body.marketCap, request.query.id));
}

exports.setChange = (request, response) => {
    response.json(model.setChange(request.body.change, request.query.id));
}


exports.setVolume = (request, response) => {
    response.json(model.setVolume(request.body.price, request.query.id));
}
