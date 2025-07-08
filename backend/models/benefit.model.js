import mongoose, {Schema} from "mongoose";

const benefitModel = new Schema({
  title: String,
  description: String,
}, {
    timestamps: true,
})

const Benefit = mongoose.model('Benefit', benefitModel)

export default Benefit;