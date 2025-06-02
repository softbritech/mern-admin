import express from "express";
import PageController from "../controllers/page.controller.js";

const router = express.Router();

const pageController = new PageController()

router.get('/',  pageController.getPages.bind(pageController));
router.get('/:id', pageController.getPageById.bind(pageController));

router.post('/new', pageController.createPage.bind(pageController));
router.put('/:id', pageController.updatePageById.bind(pageController));

export default router;