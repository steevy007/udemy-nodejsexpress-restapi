const postController=require('../controllers/posts.controller')

const express=require('express')

const router=express.Router()

router.post('/add-post',postController.addPost)
/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add posts
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: exemple description
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: path image
 *                  addedByUserId:
 *                      type: integer
 *                      example: 148
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.get('/get-all-posts',postController.getAllPosts)
/**
 * @swagger
 * /posts/get-all-posts:
 *   get:
 *      description: Used to get all posts
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post('/add-post-comment',postController.addPostComment)
/**
 * @swagger
 * /posts/add-post-comment:
 *   post:
 *      description: Used to add post comment
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Comment
 *            description: Post Comment
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *                 - comment
 *                 - addedByUserId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1075
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is sample comment
 *                  addedByUserId:
 *                      type: integer
 *                      example: 148
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/get-all-post-comment',postController.getAllPostComment)
/**
 * @swagger
 * /posts/get-all-post-comment:
 *   get:
 *      description: Used to get all comment of given post id
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/like-post',postController.likePost)
/**
 * @swagger
 * /posts/like-post:
 *   put:
 *      description: Used to like post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1075
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

 router.put('/dislike-post',postController.dislikePost)
 /**
 * @swagger
 * /posts/dislike-post:
 *   put:
 *      description: Used to dilike post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1075
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

 router.delete('/delete-post',postController.deletePost)
 /**
 * @swagger
 * /posts/delete-post:
 *   delete:
 *      description: Used to delete post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports=router