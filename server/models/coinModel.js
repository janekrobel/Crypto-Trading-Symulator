const db = require('../config/mysql2/db.js');

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

exports.getCoinById = (price, id) => {
    return db.promise().query('SET price = ? FROM COINS WHERE id = ?',[price,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}


exports.getCoinById = (marketCap, id) => {
    return db.promise().query('SET marketCap = ? FROM COINS WHERE id = ?',[marketCap,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.getCoinById = (marketCap, id) => {
    return db.promise().query('SET marketCap = ? FROM COINS WHERE id = ?',[marketCap,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setChange = (change, id) => {
    return db.promise().query('SET change = ? FROM COINS WHERE id = ?',[change,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setVolume = (volume, id) => {
    return db.promise().query('SET volume = ? FROM COINS WHERE id = ?',[volume,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

