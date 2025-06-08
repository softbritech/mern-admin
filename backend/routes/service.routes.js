import express from "express";
import ServiceController from "../controllers/service.controller.js";

const router = express.Router();

const serviceController = new ServiceController();

router.get('/', serviceController.getSlides.bind(serviceController))

export default router;