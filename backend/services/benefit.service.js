import Benefit from "../models/benefit.model.js";

class BenefitService {
    async getAll() {
        try {
            const benefits = await Benefit.find().lean().exec();
            return benefits;
        } catch (error) {
            console.log(error)
        }
    }
    async getOne(id){
        try {
            return await Benefit.findById(id).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
    async deleteOne(id) {
        try {
            return await Benefit.findByIdAndDelete(id).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
    async createOne(data)  {
        try {
            return await Benefit.create(data)
        } catch (error){
            console.log(error);
        }
    }
}
export default BenefitService;