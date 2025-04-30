import express from "express";
import PageController from "../controllers/page.controller.js";

const router = express.Router();

const pageController = new PageController()

router.get('/',  pageController.getPages.bind(pageController));

export default router;