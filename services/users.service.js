const db = require('../config/db.config')

exports.register = (data, callback) => {
    db.query(
        `INSERT INTO users (firstname,lastname,emailId,password) VALUES(?,?,?,?)`,
        [data.firstname, data.lastname, data.emailId, data.password],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'registration successful')
        }
    )
}


exports.login = (data, callback) => {
    db.query(
        `SELECT id FROM users WHERE emailId=? AND password=?`
        , [data.emailId, data.password], (error, results, fields) => {
            if (error) {
                return callback(error)
            }
            if (results.length > 0) {
                return callback(null, 'Login success')
            } else {
                return callback(null, 'Invalide credential')
            }
        })
}