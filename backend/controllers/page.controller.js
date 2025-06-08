import PageService from "../services/page.service.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class PageController {
    constructor() {
        this.pageService = new PageService();
    }

    async getPages(req, res) {
        try {
            const pages = await this.pageService.getAll();
            res.status(200).json(pages);
        } catch (error){
            console.log(error)
            res.status(404).json({message: error.message});
        }
    }

    async getPageById(req,res){
        const { id } = req.params;
        try {
            const page= await this.pageService.getPage(id);
            res.status(200).json(page);
        } catch (error){
            console.log(error);
            res.status(404).json({message: error.message});
        }
    }

    async createPage(req, res){
        try {
            const image = req.file?.filename;
            const page = await this.pageService.createPage({
                ...req.body,
                image: image ? `/${image}` : undefined,
            });
            res.status(200).json(page);
        } catch (error){
            console.log(error);
            res.status(404).json({message: error.message});
        }
    }

    async updatePageById(req,res){
        const { id } = req.params;
        try {
            const oldPage = await this.pageService.getPage(id);
            if (!oldPage) return res.status(404).json({ message: 'Not found' });
            let updateData = { ...req.body };

            if (req.file) {
                updateData.image = req.file.filename;
            } else {
                updateData.image = oldPage.image
            }

            const page = await this.pageService.updatePage(id, updateData);

            res.status(200).json(page);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
    async deletePageById(req,res){
        const {id} = req.params;
        try {
            const page = await this.pageService.deletePage(id);
            res.status(200).json(page);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}
export default PageController;