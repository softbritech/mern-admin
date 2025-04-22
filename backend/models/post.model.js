import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    name: String,
    image: String,
    change: Boolean,
    done: Boolean
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

export default Post;