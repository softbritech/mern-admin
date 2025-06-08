import Service from "../models/service.model.js";

class ServiceService {
    async getAll() {
        try {
            const slides = await Service.find().lean().exec();
            return slides;
        } catch (error){
            console.log(error);
        }
    }
}
export default ServiceService;