import PostService from "../services/post.service.js";

class PostController {
    constructor() {
        this.postService = new PostService();
    }
    async getPosts(req, res) {
        try {
            const posts = await this.postService.getAll();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default PostController