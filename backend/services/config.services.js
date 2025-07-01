import Config from "../models/config.model.js";

class configService {

    async getAll(filter = {}){
        try {
            const configs = await Config.find(filter).lean().exec();
            return configs;
        } catch (error){
            console.log(error);
        }
    }
    async getConfig(id) {
        try {
            return await Config.findById(id).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
    async createConfig(data) {
        try {
            return await Config.create(data);
        } catch (error){
            console.log(error);
        }
    }
    async updateConfig(id, data) {
        try {
         return await Config.findByIdAndUpdate(id, data, { new: true }).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
    async deleteConfig(id) {
        try {
           return await Config.findByIdAndDelete(id).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
}
export default configService;