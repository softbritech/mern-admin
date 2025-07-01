import express from "express";
import ServiceController from "../controllers/service.controller.js";
import upload from "../config/multer.config.js";

const router = express.Router();

const serviceController = new ServiceController();

router.get('/', serviceController.getServices.bind(serviceController))

router.get('/:id', serviceController.getServiceById.bind(serviceController));

router.put('/:id',
    serviceController.updateServiceById.bind(serviceController),
);

router.post('/new', serviceController.createService.bind(serviceController));
router.delete('/:id', serviceController.deleteServiceById.bind(serviceController));
export default router;