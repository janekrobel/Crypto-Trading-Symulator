const db = require('../config/mysql2/db.js');

exports.getPositionsByUserEmail = (userEmail) => {
    return db.promise().query('SELECT * FROM `POSITION` WHERE id_user = (SELECT id FROM USER WHERE email = ?)',[userEmail]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}
exports.getPositionsById = (_id) => {
    return db.promise().query('SELECT * FROM `POSITION` WHERE id = ?',[_id]).then((result, fields) => {
        console.log("DB: ", result[0][0]);
        return result[0][0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.getValueOfAllPositionsByEmail = (_email) => {
    //check if correct
    return db.promise().query('SELECT SUM(amounts*(SELECT price FROM COIN WHERE id = id_coin)) FROM `POSITION` WHERE id_user = (SELECT id FROM USER WHERE email = ?);',[_email]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
};


exports.createPositions = (position) =>{
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return db.promise().query(
        "INSERT INTO POSITION (`id_user`,`id_coin`, `price`, `amounts`, `date`, `type`) VALUES (?,?,?,?,?,?)",[position.id_user , parseInt(position.id_coin), position.price, parseFloat(position.amounts), now, position.type]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setPosition = (position) => {
    return db.promise().query('UPDATE POSITION SET price = ?, amounts = ?, date = ?, type = ?, id_user = ?, id_coin = ? WHERE id = ?',[position.price , position.amounts, position.date, position.type, position.id_user, position.id_coin, position.id]).then((result, fields) => {
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
