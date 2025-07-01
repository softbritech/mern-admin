import express from "express";
import ConfigController from "../controllers/config.controller.js";

const router = express.Router();

const configController = new ConfigController()

router.get('/', configController.getConfigs.bind(configController))

router.post('/new', configController.createConfig.bind(configController));

router.put("/:id", configController.updateConfigById.bind(configController));

router.delete("/:id", configController.deleteConfigById.bind(configController));

router.get('/:id', configController.getConfigById.bind(configController));

export default router;
