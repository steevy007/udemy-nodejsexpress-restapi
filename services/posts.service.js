const db=require('../config/db.config')

exports.addPost=(data,callback)=>{
    db.query(
        `INSERT INTO posts (description,imagePath,addedByUserId) VALUES(?,?,?) `
    ,[data.description,data.imagePath,data.addedByUserId],(error,results,fields)=>{
        if(error){
            return callback(error)
        }

        return callback(null,"Post added Succesfully")
    })
}

exports.getAllPosts = (data, callback) => {
    db.query(
      `SELECT p.id AS postId, p.description, p.datetimeCreated, 
      p.likeCount, p.dislikeCount, p.addedByUserId, u.firstName, u.lastName 
      FROM posts AS p INNER JOIN users AS u ON p.addedByUserId = u.id`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };


  exports.addPostComment=(data,callback)=>{
    db.query(
        `INSERT INTO comments (postId,comment,addedByUserId,datetimeCreated) VALUES(?,?,?,?) `
    ,[data.postId,data.comment,data.addedByUserId,new Date()],(error,results,fields)=>{
        if(error){
            return callback(error)
        }

        return callback(null,"Post Comment added Succesfully")
    })
}

exports.getAllPostComment = (data, callback) => {
    db.query(
        `SELECT c.comment, c.datetimeCreated, c.addedByUserId, u.firstName, u.lastName
        FROM comments AS c INNER JOIN users AS u ON c.addedByUserId = u.id
        WHERE c.postId = ?`,
        [data.postId],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
  };

  exports.likePost = (data, callback) => {
    db.query(
      `UPDATE  posts
      SET 
      likeCount = likeCount + 1
      WHERE 
      id = ?`,
      [data.postId],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        if (results.affectedRows === 1) {
          return callback(null, `Like Successful`);
        } else {
          return callback(new Error("Invalid post"));
        }
      }
    );
  };
  exports.dislikePost = (data, callback) => {
    db.query(
      `UPDATE  posts
      SET 
      dislikeCount = dislikeCount + 1
      WHERE 
      id = ?`,
      [data.postId],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        if (results.affectedRows === 1) {
          return callback(null, `Dislike Successful`);
        } else {
          return callback(new Error("Invalid post"));
        }
      }
    );
  };
  

  exports.deletePost=(data,callback)=>{
    db.query(
        `DELETE FROM posts WHERE id=?`
    ,[data.postId],(error,results,fields)=>{
        if (error) {
            return callback(error);
          }          
            return callback(null,"Post deleted");
          
    })
  }