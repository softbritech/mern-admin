import mongoose, {Schema} from "mongoose";

const serviceModel = new Schema({
    title: String,
    description: String,
}, {
    timestamps: true,
});

const Service = mongoose.model('Service', serviceModel);

export default Service