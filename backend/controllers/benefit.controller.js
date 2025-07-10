import BenefitService from "../services/benefit.service.js";


class BenefitController {
    constructor() {
        this.benefitService = new BenefitService();
    }

    async getBenefits (req, res) {
        try {
            const benefits = await this.benefitService.getAll();
            res.status(200).json(benefits);
        } catch (error){
            res.status(404).send({message: error.message})
        }
    }
    async getBenefitById (req, res) {
        const { id } = req.params;
        try {
            const benefit = await this.benefitService.getOne(id)
            res.status(200).json(benefit);
        } catch (error){
            res.status(404).send({message: error.message})
        }
    }
    async createBenefit (req, res) {
        const {title, description } = req.body;
        try {
            const benefits = await this.benefitService.createOne({title, description});
            res.status(201).json(benefits);
        } catch (error){
            res.status(404).send({message: error.message})
        }
    }
    async deleteBenefit (req, res) {
        const { id } = req.params;
        try {
            const benefits = await this.benefitService.deleteOne(id);
            res.status(201).json(benefits);
        } catch (error){
            res.status(404).send({message: error.message})
        }
    }
}
export default BenefitController;