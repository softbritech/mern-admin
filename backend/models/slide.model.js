import mongoose, {Schema} from "mongoose";

const slideSchema = new Schema({
    slug: {type: String, required: true},
    title: String,
    description: String,
    image: String,
}, {
    timestamps: true,
});

const Slide = mongoose.model('Slide', slideSchema);

export default Slide;