const coinModel = require('../models/coinModel.js')
const userModel = require('../models/userModel.js');
const positionModel = require('../models/positionsModel.js');

const test = () => {    

    coinModel.setPriceChange(100,1).then((results) => {
        console.log("passed");
    });

    coinModel.setMarketCap(22200202,1).then((results) => {
        console.log("passed");
    });

    coinModel.setPrice(23000,1).then((results) => {
        console.log("passed");
    });

    coinModel.setVolume(696969,1).then((results) => {
        console.log("passed");
    });

    coinModel.getCoinById(1).then((results) => {
        console.log("passed");
    });

    coinModel.getAllCoins().then((results) => {
        console.log("passed");
    });

    userModel.createUser("robelkowo@gmail.com").then((results) => {
        console.log("passed");
    });

    userModel.getUserByEmail("robelkowo@gmail.com").then((results) => {
        console.log("passed");
    });

    userModel.getUserById(1).then((results) => {
        console.log("passed");
    });

    userModel.getUserBalance(1).then((results) => {
        console.log("passed");
    });

    userModel.setUserBalance(200,1).then((results) => {
        console.log("passed");
    });

    positionModel.createPositions(1, 1, 23000, 100, '2022-04-22 10:34:23.55', "long").then((results) => {
        console.log("passed");
    });

    positionModel.getPositionsByUserId(1).then((results) => {
        console.log("passed");
    });

    positionModel.closePosition(1).then((results) => {
        console.log("passed");
    });

}   

test();