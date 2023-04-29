const db = require('../config/mysql2/db.js');

exports.getUserById = (id) => {
    return db.promise().query('SELECT * FROM USER WHERE id = ?',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0][0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.getUserByEmail = (email) => {
    return db.promise().query('SELECT * FROM USER WHERE email = ?',[email]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0][0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}


exports.createUser = (email) => {
    return db.promise().query('INSERT INTO USER (email,balance) VALUES (?,100.00)',[email]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setUserBalance = (user) => {
    return db.promise().query('UPDATE USER SET balance = ? WHERE id = ?',[user.balance, user.id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}


exports.setUser = (user) => {
    return db.promise().query('UPDATE USER SET img = ?, about = ? WHERE email = ?',[user.img, user.about, user.email]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}


exports.deleteUser = (id) => {
    return db.promise().query('DELETE * FROM USER WHERE id = ? ',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}




