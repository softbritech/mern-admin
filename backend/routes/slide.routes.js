import express from "express";
import SlideController from "../controllers/slide.controller.js";

const router = express.Router();

const slideController = new SlideController();

router.get('/', slideController.getSlides.bind(slideController));
router.get('/:id', slideController.getSlideById.bind(slideController));

router.put('/:id', slideController.updateSlideById.bind(slideController));
router.delete('/:id', slideController.deleteSlideById.bind(slideController));

export default router;