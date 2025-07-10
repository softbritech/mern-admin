import mongoose, {Schema} from "mongoose";

const benefitSchema = new Schema({
  title: String,
  description: String,
}, {
    timestamps: true,
})

const Benefit = mongoose.model('Benefit', benefitSchema);

export default Benefit;