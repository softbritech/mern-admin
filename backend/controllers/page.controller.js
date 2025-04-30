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

}
export default PageController;