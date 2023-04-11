const model = require("../models/positionsModel.js");
const coinModel = require("../models/coinModel.js");
const userModel = require("../models/userModel.js");

exports.getPositionsByUserEmail = (req, res) => {
    model.getPositionsByUserEmail(req.email).then((result)=>{ res.json(result)});
}

exports.getPositionsById = (req, res) => {
    model.getPositionsById(req.query.id).then((result)=>{ res.json(result)});
};

exports.createPositions = (req, res) => {
    console.log(req.body);
    console.log("hey");
    userModel.getUserByEmail("robelkowo@gmail.com").then((user)=> {
        coinModel.getCoinById(req.body.coin_id).then((coin) => {
            console.log(coin);
            var balance = user.balance-(coin.price * req.body.amounts)
            console.log(balance);
            if(balance >= 0){
                position = {
                    price: coin.price,
                    id_user: user.id,
                    id_coin: req.body.coin_id,
                    type: req.body.type,
                    amounts: req.body.amounts
                }
                console.log(position);
                userModel.setUser({balance: balance, id: user.id}).then(()=>{
                    model.createPositions(position).then((result)=>{ res.json(result)});
                });
            };
        });
       
    });
}

exports.closePosition = (req, res) => {
    model.getPositionsById(req.query.id).then((result)=>{
        //check "result.id_coin" + "coinResult.price" + "result.amounts" + "result.type"
         coinModel.getCoinById(result.id_coin).then((coinResult)=>{
            userModel.getUserByEmail("robelkowo@gmail.com").then((userResult)=>{
                console.log(result)
                console.log(coinResult)
                console.log(userResult)
                let wspolczynnik = (result.type === "Long") ? -1 : 1
                let startPos = result.price * result.amounts

                let pozycja = startPos - coinResult.price * result.amounts
                let profit = pozycja * wspolczynnik;

                userModel.setUser({balance: startPos + profit + userResult.balance, id: userResult.id})
                model.closePosition(req.query.id).then((result)=>{ res.json(result)});
              
            });
        })
    });
}

exports.getValueOfAllPositionsByEmail = (req,res) => {
    model.getValueOfAllPositionsByEmail(req.query.email).then((result)=>{
        res.json(result);
    });
};

exports.setPosition = (req,res) => {
    model.setPosition(req.body).then((result)=>{{res.json(result)}});
}
