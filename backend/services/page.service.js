import Page from "../models/page.model.js";

class PageService {
    async getAll(){
        try {
            const pages = await Page.find().exec();
            return pages;
        } catch (error){
            console.log((error))
        }
    }

}
export default PageService