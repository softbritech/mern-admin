import express from "express";
import BenefitController from "../controllers/benefit.controller.js";

const router = express.Router();

const benefitController = new BenefitController()


router.get('/', benefitController.getBenefits.bind(benefitController));

router.get('/:id', benefitController.getBenefitById.bind(benefitController));

router.post('/new', benefitController.createBenefit.bind(benefitController));

router.delete('/:id', benefitController.deleteBenefit.bind(benefitController));
export default router;