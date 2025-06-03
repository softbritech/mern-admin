import mongoose, {Schema} from "mongoose";

const pageSchema = new Schema({
    name: String,
    slug: String,
    title: String,
    description: String,
    short_description: String,
    image: String,
    isHeader: {type: Boolean, default: true},
    isFooter:{type: Boolean, default: false},
}, {
    timestamps: true,
});

const Page= mongoose.model('Page', pageSchema);
export default Page;