const db = require('../config/mysql2/db.js');

exports.getPositionsByUserId = (userId) => {
    return db.promise().query('SELECT * FROM POSITIONS WHERE id_user = ?',[userId]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.createPositions = (id_user, id_coin, price, amount, date, type) =>{
    return db.promise().query(
        `INSERT INTO POSITIONS (id_user, id_coin, price, amounts, date, type) VALUES (?,?,?,?,?,?)`,[id_user, id_coin, price, amount, date, type]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.closePosition = (id) => {
    return db.promise().query('DELETE FROM POSITIONS WHERE id = ?',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}
