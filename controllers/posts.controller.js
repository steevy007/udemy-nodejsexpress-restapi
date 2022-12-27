const postsService=require('../services/posts.service')

exports.addPost=(req,res,next)=>{
    const data={
        description:req.body.description,
        imagePath:req.body.imagePath,
        addedByUserId:req.body.addedByUserId
    }

    postsService.addPost(data,(error,result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success:0,data:'Bad Request'})
        }

        return res.status(200).send({success:1,data:result})
    })
}

exports.getAllPosts=(req,res,next)=>{
    const data={}
    postsService.getAllPosts(data,(error,results)=>{
        if(error){
            console.log(error)
            res.status(400).send({success:0,data:'Bad Request'})
        }

        return res.status(200).send({success:1,data:results})
    })
}


exports.addPostComment=(req,res,next)=>{
    const data={
        postId:req.body.postId,
        comment:req.body.comment,
        addedByUserId:req.body.addedByUserId
    }

    postsService.addPostComment(data,(error,results)=>{
        if(error){
            console.log(error)
            res.status(400).send({success:0,data:'Bad Request'})
        }

        return res.status(200).send({success:1,data:results})
    })
}


exports.getAllPostComment=(req,res,next)=>{
    const data={
        postId:req.query.postId
    }
    postsService.getAllPostComment(data,(error,results)=>{
        if(error){
            console.log(error)
            res.status(400).send({success:0,data:'Bad Request'})
        }

        return res.status(200).send({success:1,data:results})
    })
}

exports.likePost=(req,res,next)=>{
    const data={
       postId:req.body.postId
    }

    postsService.likePost(data,(error,result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success:0,data:'Bad Request'})
        }

        return res.status(200).send({success:1,data:result})
    })
}





exports.dislikePost=(req,res,next)=>{
    const data={
       postId:req.body.postId
    }

    postsService.dislikePost(data,(error,result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success:0,data:'Bad Request'})
        }

        return res.status(200).send({success:1,data:result})
    })
}

exports.deletePost=(req,res,next)=>{
    const data={
        postId:req.query.postId
     }
 
     postsService.deletePost(data,(error,result)=>{
         if(error){
             console.log(error);
             return res.status(400).send({success:0,data:'Bad Request'})
         }
 
         return res.status(200).send({success:1,data:result})
     })
}