const model = require("../models/positionsModel.js");
const coinModel = require("../models/coinModel.js");
const userModel = require("../models/userModel.js");
const positionModel = require("../models/positionsModel.js");

exports.getPositionsByUserEmail = (req, res) => {
    model.getPositionsByUserEmail(req.email).then((result)=>{ res.json(result)});
}

exports.getPositionsById = (req, res) => {
    model.getPositionsById(req.query.id).then((result)=>{ res.json(result)});
};

exports.createPositions = (req, res) => {
    if(req.body.amounts <= 0){
        res.sendStatus(401);
    }
    if(req.body.type != "Short" && req.body.type != "Long"){
        res.sendStatus(401);
    }
    userModel.getUserByEmail(req.email).then((user)=> {
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
                userModel.setUserBalance({balance: balance, id: user.id}).then(()=>{
                    model.createPositions(position).then((result)=>{ res.redirect('/?message=Dodano')});
                });
            };
        });
       
    });
}

exports.closePosition = (req, res) => {
    model.getPositionsById(req.query.id).then((result)=>{
         coinModel.getCoinById(result.id_coin).then((coinResult)=>{
            userModel.getUserByEmail(req.email).then((userResult)=>{
                console.log(result)
                console.log(coinResult)
                console.log(userResult)
                let wspolczynnik = (result.type === "Long") ? -1 : 1
                let startPos = result.price * result.amounts

                let pozycja = startPos - coinResult.price * result.amounts
                let profit = pozycja * wspolczynnik;

                userModel.setUserBalance({balance: startPos + profit + userResult.balance, id: userResult.id})
                model.closePosition(req.query.id).then((result)=>{ res.redirect('/')});
              
            });
        })
    });
}

exports.getTotalValue = (email) => {
    return positionModel.getPositionsByUserEmail(email).then((positions)=>{
        return coinModel.getAllCoins().then(async (coinList)=>{
            let totalValue = 0;
            let userBalance = 0;
            for(position of positions){
                let wspolczynnik = (position.type === "Long") ? -1 : 1
                let startPos = position.price * position.amounts;

                const isIndex = (element) => element.id === position.id_coin;
                
                let coinIndex = coinList.findIndex(isIndex);
                let coin = coinList[coinIndex];

                let currentValue = startPos - coin.price * position.amounts;
                let profit = currentValue * wspolczynnik;

                totalValue += profit + startPos;
                let user = await userModel.getUserByEmail(email);
                userBalance = user.balance;
                
            };
            return {totalValue: Math.round(totalValue * 1000)/1000
            , totalBalance : Math.round((totalValue + userBalance) * 1000)/1000};
            
        });
    })
}

exports.setPosition = (req,res) => {
    model.setPosition(req.body).then((result)=>{{res.json(result)}});
}
