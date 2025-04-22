import Post from "../models/post.model.js";

class PostService {
     async getAll() {
          try {
               const posts = await Post.find().exec();
               return posts;
          } catch (error){
               console.log(error)
          }
     }
}
export default PostService;