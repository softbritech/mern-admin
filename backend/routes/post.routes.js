import express from "express";
import PostController from "../controllers/post.controller.js";

const router = express.Router();

const postController = new PostController();

router.get('/', postController.getPosts.bind(postController));

export default router;