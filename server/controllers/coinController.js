const model = require("../models/coinModel.js");


exports.createCoin = (coin) => {
    model.createCoin(coin).then((result)=>{});
}

exports.getAllCoins = (request, response) => {
    model.getAllCoins().then((result)=>{ response.json(result)});
}

exports.setCoin = (request, response) => {
    model.setPrice(request.body).then((result)=>{ response.json(result)});
}

exports.getCoinById = (request, response) => {
    model.getCoinById(request.query.id).then((result)=>{ response.json(result)});
}

exports.deleteCoin = (request,response) => {
    model.deleteCoin(request.query.id).then((result)=>{
        response.json(result);
    });
}
