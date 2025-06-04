import PageService from "../services/page.service.js";

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
            const page = await this.pageService.createPost({
                ...req.body,
                image: image ? `/${image}` : undefined,
            });
            res.status(200).json(page);
        } catch (error){
            console.log(error);
            res.status(404).json({message: error.message});
        }
    }
    //UPDATE DOESN'T WORK AND IMPLEMET THE DELETE TOO
    async updatePageById(req,res){
        const { id } = req.params;
        try {
            const image = req.file?.filename;
            const updateData = await this.pageService.updatePost({
                ...req.body,
                image:image ? `/${image}` : undefined,
            })
            const page = await this.pageService.updatePost(id, updateData);
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