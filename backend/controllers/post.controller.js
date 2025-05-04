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
    async createPost(req, res) {
        const { name, description } = req.body;
        try {
            const posts = await this.postService.createPost({name, description});
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getPostById(req, res) {
        const { id } = req.params;
        try {
            const post = await this.postService.getPost(id);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async deletePostById(req, res) {
        const { id } = req.params;
        try {
            const post = await this.postService.deletePost(id);
            res.status(200).json(post);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
    async updatePostById(req,res){
        const { id } = req.params;
        try {
            const post = await this.postService.updatePost(id, req.body);
            res.status(200).json(post);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}

export default PostController