const db = require('../config/mysql2/db.js');


exports.getAllCoins = () => {
    return db.promise().query('SELECT * FROM COIN ORDER BY marketCap DESC').then((result, fields) => {
        //console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.createCoin = (coin) => {
    return db.promise().query('INSERT INTO COIN (uuid, symbol, name, price, marketCap, iconUrl, priceChange, volumen24) VALUES (?,?,?,?,?,?,?,?)',[coin.uuid,coin.symbol,coin.name,coin.price,coin.marketCap,coin.iconUrl,coin.priceChange,coin.volumen24]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setCoin = (coin) => {
    return db.promise().query('UPDATE COIN SET price = ?, marketCap = ?, volumen24 = ?, priceChange = ? WHERE uuid = ?',[coin.price, coin.marketCap, coin.volume, coin.change, coin.uuid]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.getCoinById = (id) => {
    return db.promise().query('SELECT * FROM COIN WHERE id = ?',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0][0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.deleteCoin = (id) => {
    return db.promise().query('DELETE FROM COIN WHERE id = ? ',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}