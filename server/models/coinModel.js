const db = require('../config/mysql2/db.js');


exports.getAllCoins = () => {
    return db.promise().query('SELECT * FROM COINS ORDER BY marketCap').then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setPrice = (price, id) => {
    return db.promise().query('UPDATE COINS SET price = ? WHERE id = ?',[price,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.getCoinById = (id) => {
    return db.promise().query('SELECT * FROM COINS WHERE id = ?',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setMarketCap = (marketCap, id) => {
    return db.promise().query('UPDATE COINS SET marketCap = ? WHERE id = ?',[marketCap,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}


exports.setPriceChange = (change, id) => {
    return db.promise().query('UPDATE COINS SET priceChange = ? WHERE id = ?',[change,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setVolume = (volume, id) => {
    return db.promise().query('UPDATE COINS SET volumen24 = ? WHERE id = ?',[volume,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

