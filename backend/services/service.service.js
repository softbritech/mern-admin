import Service from "../models/service.model.js";

class ServiceService {
    async getAll() {
        try {
            const services = await Service.find().lean().exec();
            return services;
        } catch (error){
            console.log(error);
        }
    }
    async createService(data) {
        try {
            return await Service.create(data);
        } catch (error) {
            console.log(error)
        }
    }

    async deleteService(id) {
        try {
            return await Service.findByIdAndDelete(id).lean().exec();
        } catch (error) {
            console.log(error)
        }
    }
    async updateService(id, data) {
        try {
            return await Service.findByIdAndUpdate(id, data, {new: true}).lean().exec();
        } catch (error) {
            console.log(error)
        }
    }

    async getService(id) {
        try {
            return await Service.findById(id).lean().exec();
        } catch (error) {
            console.log(error)
        }
    }
}
export default ServiceService;