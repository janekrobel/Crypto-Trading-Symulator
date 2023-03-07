const db = require('../config/mysql2/db.js');

exports.getUserById = (id) => {
    return db.promise().query('SELECT * FROM USERS WHERE id = ?',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.getUserByEmail = (email) => {
    return db.promise().query('SELECT * FROM USERS WHERE emai = ?',[email]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}


exports.createUser = (email) => {
    return db.promise().query('INSERT INTO USERS (id,email,balance) VALUES (?,100.00)',[email]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.getUserBalance = (id) => {
    return db.promise().query('SELECT balance FROM USERS WHERE id = ?',[id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}

exports.setUserBalance = (id, balance) => {
    return db.promise().query('SET balance = ? FROM USERS WHERE id = ?',[balance,id]).then((result, fields) => {
        console.log("DB: ", result[0]);
        return result[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}




