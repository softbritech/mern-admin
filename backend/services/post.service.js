import Post from "../models/post.model.js";

class PostService {
    async getAll() {
        try {
            const posts = await Post.find().lean().exec();
            return posts;
        } catch (error) {
            console.log(error)
        }
    }

    async createPost(data) {
        try {
            return await Post.create(data);
        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(id) {
        try {
            return await Post.findByIdAndDelete(id).lean().exec();
        } catch (error) {
            console.log(error)
        }
    }
    async updatePost(id, data) {
        try {
            return await Post.findByIdAndUpdate(id, data, {new: true}).lean().exec();
        } catch (error) {
            console.log(error)
        }
    }

    async getPost(id) {
        try {
            return await Post.findById(id).lean().exec();
        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService;