import ServiceService from "../services/service.service.js";

class ServiceController {
    constructor() {
        this.serviceService = new ServiceService()
    }

    async getServices(req, res){
        try {
            const services = await this.serviceService.getAll();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async createService(req, res) {
        const { name, description } = req.body;
        try {
            const posts = await this.serviceService.createService({name, description});
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getServiceById(req, res) {
        const { id } = req.params;
        try {
            const post = await this.serviceService.getService(id);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async deleteServiceById(req, res) {
        const { id } = req.params;
        try {
            const post = await this.serviceService.deleteService(id);
            res.status(200).json(post);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
    async updateServiceById(req,res){
        const { id } = req.params;
        try {
            const post = await this.serviceService.updateService(id, req.body);
            res.status(200).json(post);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

}

export default ServiceController;