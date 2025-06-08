import serviceService from "../services/service.service.js";
import ServiceService from "../services/service.service.js";

class ServiceController {
    constructor() {
        this.serviceService = new ServiceService()
    }

    async getSlides(req, res){
        try {
            const slides = await this.serviceService.getAll();
            res.send(200).json(slides);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default ServiceController;