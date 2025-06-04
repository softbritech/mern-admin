import express from "express";
import PageController from "../controllers/page.controller.js";
import upload from "../config/multer.config.js";

const router = express.Router();

const pageController = new PageController()

router.get('/',  pageController.getPages.bind(pageController));
router.get('/:id', pageController.getPageById.bind(pageController));

router.post('/new', upload.single('image'), pageController.createPage.bind(pageController));
router.put('/:id',  upload.single('image'), pageController.updatePageById.bind(pageController));

router.delete('/:id', pageController.deletePageById.bind(pageController));
export default router;