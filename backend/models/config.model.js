import mongoose, {Schema} from "mongoose";


const configModel = new Schema({
    group: { type: String, required: false },
    key: { type: String, required: true},
    value: { type: mongoose.Schema.Types.Mixed, required: true },
    lang: { type: String, required: true, default: "en" }
    }, {
    timestamps: true,
    }
)
const Config = mongoose.model('Config', configModel);

export default Config;