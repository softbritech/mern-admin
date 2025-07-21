import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    name: String,
    description: String,
    image: String,
    author: String,
    date: Date,
}, {
    timestamps: true,
});

const Post= mongoose.model('Post', postSchema);

export default Post;