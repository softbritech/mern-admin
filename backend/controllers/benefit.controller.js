import benefitService from "../services/benefit.service.js";


class BenefitController {
    constructor() {
        this.benefitService = new benefitService();
    }

    async getBenefits (req, res) {
        try {
            const benefits = await this.benefitService.getAll();
            res.status(200).json(benefits);
        } catch (error){
            res.status(404).send({message: error.message})
        }
    }


}
export default BenefitController;