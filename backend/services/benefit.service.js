import Benefit from "../models/benefit.model.js";

class benefitService {
    async getAll() {
        try {
            const benefits = await Benefit.find().lean().exec();
            return benefits;
        } catch (error) {
            console.log(error)
        }
    }
}
export default benefitService;