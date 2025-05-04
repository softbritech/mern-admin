import express from "express";
import PostController from "../controllers/post.controller.js";

const router = express.Router();

const postController = new PostController();

router.get('/', postController.getPosts.bind(postController));
router.get('/:id', postController.getPostById.bind(postController));

router.post('/new', postController.createPost.bind(postController));
router.put('/:id', postController.updatePostById.bind(postController));
router.delete('/:id', postController.deletePostById.bind(postController));
export default router;

