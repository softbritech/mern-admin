import express from "express";
import BenefitController from "../controllers/benefit.controller.js";

const router = express.Router();

const benefitController = new BenefitController()


router.get('/', benefitController.getBenefits.bind(benefitController));

export default router;