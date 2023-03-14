const db = require('../config/mysql2/db.js');

exports.getPositionsByUserId = (userId) => {
    return db.promise().query('SELECT * FROM POSITION WHERE id_user = ?',[userId]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.createPositions = (position) =>{
    return db.promise().query(
        `INSERT INTO POSITION (id_user, id_coin, price, amounts, date, type) VALUES (?,?,?,?,?,?)`,[position.id_user, position.id_coin, position.price, position.amount, position.date, position.type]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setPosition = (coin) => {
    return db.promise().query('SET POSITION price = ?, amounts = ?, date = ?, type = ?, id_user = ?, id_coin = ? WHERE id = ?',[position.price , position.amounts, position.date, position.type, position.id_user, position.id_coin, position.id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}



exports.closePosition = (id) => {
    return db.promise().query('DELETE FROM POSITION WHERE id = ?',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}
