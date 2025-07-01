import configService from "../services/config.services.js";


class ConfigController {
    constructor() {
        this.configService = new configService()
    }

    async getConfigs(req, res) {
        try {
            const { lang } = req.query;
            const filter = {};
            if (lang) {
                filter.lang = lang;
            }
            const pages = await this.configService.getAll(filter);
            res.status(200).json(pages);
        } catch (error) {
            console.log(error);
            res.status(404).json({message: error.message})
        }
    }
    async getConfigById(req,res) {
        const { id } = req.params;
        try {
            const config = await this.configService.getConfig(id);
            if (!config) return res.status(404).json({ message: "Not found" });
            res.status(200).json(config);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async createConfig(req, res) {
        try {
            const config = await this.configService.createConfig(req.body);
            res.status(201).json(config);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateConfigById(req, res) {
        const { id } = req.params;
        try {
            const config = await this.configService.updateConfig(id, req.body);
            if (!config) return res.status(404).json({ message: "Not found" });
            res.status(200).json(config);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteConfigById(req, res) {
        const { id } = req.params;
        try {
            const config = await this.configService.deleteConfig(id);
            if (!config) return res.status(404).json({ message: "Not found" });
            res.status(200).json({ _id: req.params.id });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
export default ConfigController;