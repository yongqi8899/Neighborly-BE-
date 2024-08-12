import { Router } from 'express';
import { createPost, getPost, getPosts, updatePost, deletePost } from '../controllers/posts.js';
import validateJoi from '../middlewares/validateJOI.js';
import postSchema from '../joi/postSchema.js';

const postRouter = Router();

postRouter.route('/').get(getPosts).post(validateJoi(postSchema), createPost);

postRouter.route('/:id').get(getPost).post(validateJoi(postSchema), updatePost).delete(deletePost);

export default postRouter;