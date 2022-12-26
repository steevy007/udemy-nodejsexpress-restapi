const db=require('../config/db.config')

exports.register=(data,callback)=>{
    db.query(
        `INSERT INTO users (firstname,lastname,emailId,password) VALUES(?,?,?,?)`,
        [data.firstname,data.lastname,data.emailId,data.password],
        (error,results,fields)=>{
            if(error){
                return callback(error);
            }   
            return callback(null,'registration successful')        
        }
    )
}