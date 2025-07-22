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
        try {
            const image = req.file?.filename;
            const post = await  this.postService.createPost({
                ...req.body,
                image: image ? `/${image}` : undefined,
            });
            const posts = await this.postService.createPost(post);

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
            const oldPost = await this.postService.getPost(id);
            if(!oldPost) return res.status(404).json({message: 'Not Found'});
            let updatedData ={...req.body}

            if(req.file){
                updatedData.image = req.file.filename;
            } else{
                updatedData.image = oldPost.image;
            }

            const post = await this.postService.updatePost(id, updatedData);

            res.status(200).json(post);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}

export default PostController