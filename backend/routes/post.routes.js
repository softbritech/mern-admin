import express from "express";
import PostController from "../controllers/post.controller.js";
import upload from "../config/multer.config.js";

const router = express.Router();

const postController = new PostController();

router.get('/', postController.getPosts.bind(postController));
router.get('/:id', postController.getPostById.bind(postController));
router.post('/new', upload.single('image'), postController.createPost.bind(postController));

router.patch('/:id',
    upload.single('image'),
    postController.updatePostById.bind(postController),
);

router.delete('/:id', postController.deletePostById.bind(postController));
export default router;

