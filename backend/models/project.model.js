import mongoose, {Schema} from "mongoose";


const postModel = new Schema({
    title: String,
    description: String,
    short_description: String,
    image: String,
})

const Post = mongoose.model('Post',  postModel);

export default Post;