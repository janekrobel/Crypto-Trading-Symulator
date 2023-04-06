const model = require("../models/positionsModel.js");
const coinModel = require("../models/coinModel.js");
const userModel = require("../models/userModel.js");

exports.getPositionsByUserEmail = (request, response) => {
    model.getPositionsByUserEmail(request.email).then((result)=>{ response.json(result)});
}

exports.getPositionsById = (request, response) => {
    model.getPositionsById(request.query.id).then((result)=>{ response.json(result)});
};

exports.createPositions = (request, response) => {
    userModel.getUserByEmail(request.body.email).then((result)=> {
        //check "result.balance" + "coinResult.price"
        coinModel.getCoinById(request.body.id_coin).then((coinResult) => {
            if(result.balance - (coinResult.price * request.body.amounts) >= 0){
                userModel.setUser(result.balance-(coinResult.price * request.body.amounts)).then((userResult)=>{
                    model.createPositions(request.body).then((result)=>{ response.json(result)});
                });
            };
        });
       
    });
}

exports.getValueOfAllPositionsByEmail = (request,response) => {
    model.getValueOfAllPositionsByEmail(request.query.email).then((result)=>{
        response.json(result);
    });
};

exports.closePosition = (request, response) => {
    model.getPositionsById(request.query.id).then((result)=>{
        //check "result.id_coin" + "coinResult.price" + "result.amounts" + "result.type"
         coinModel.getCoinById(result.id_coin).then((coinResult)=>{
            userModel.getUserByEmail((userResult)=>{
                if(result.type == "Short"){
                    userModel.setUser(2 * result.price * result.amounts - coinResult.price * result.amounts + userResult.balance).then((result)=>{
                        model.closePosition(request.query.id).then((result)=>{ response.json(result)});
                    })
                }
                else{   
                    userModel.setUser(coinResult.price * result.amounts + userResult.balance).then((result)=>{
                        model.closePosition(request.query.id).then((result)=>{ response.json(result)});
                    })
                }
            });
        })
    });
}

exports.setPosition = (request,response) => {
    model.setPosition(request.body).then((result)=>{{response.json(result)}});
}
