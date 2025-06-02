import Slide from "../models/slide.model.js";

class SlideService {
    async getAll() {
        try {
            const slides = await Slide.find().lean().exec()
            return slides;
        } catch (error) {
            console.log(error);
        }
    }
    async getSlide(id) {
        try {
            return await Slide.findById(id).lean().exec();
        } catch (error) {
            console.log(error);
        }
    }
    async updateSlide(id, data) {
        try {
            return await Slide.findByIdAndUpdate(id, data, { new: true }).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
    async deleteSlide(id){
        try {
            return await Slide.findByIdAndDelete(id).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
}

export default SlideService;