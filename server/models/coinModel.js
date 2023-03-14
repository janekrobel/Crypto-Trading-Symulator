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

exports.createCoin = (coin) => {
    return db.promise().query('INSERT INTO COINS (uuid, symbol, name, price, marketCap, volume, change) VALUES (?,?,?,?,?,?,?)',[coin.uuid,coin.symbol,coin.name,coin.price,coin.marketCap,coin.volume,coin.change]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setCoin = (coin) => {
    return db.promise().query('SET COINS price = ?, marketCap = ?, volume = ?, change = ? WHERE id = ?',[coin.price, coin.marketCap, coin.volume, coin.change, coin.id]).then((result, fields) => {
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

exports.deleteCoin = (id) => {
    return db.promise().query('DELETE  * FROM COINS WHERE id = ? ',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}