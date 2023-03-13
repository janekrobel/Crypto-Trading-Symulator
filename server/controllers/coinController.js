const model = require("../models/coinModel.js");


exports.createCoin = () => {
    model.createCoin(request.body.uuid, request.body.symbol, request.body.name, request.body.price,request.body.marcetCap,request.body.change, request.body.volume).then((result)=>{ response.json(result)});
}

exports.getAllCoins = (request, response) => {
    model.getAllCoins().then((result)=>{ response.json(result)});
}

exports.setCoin = (request, response) => {
    model.setPrice(request.body.price,request.body.marcetCap,request.body.change, request.body.volume, request.query.id).then((result)=>{ response.json(result)});
}

exports.getCoinById = (request, response) => {
    request.query.id.then((result)=>{ response.json(result)});
}
