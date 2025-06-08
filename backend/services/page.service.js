import Page from "../models/page.model.js";
import Post from "../models/post.model.js";

class PageService {
    async getAll(){
        try {
            const pages = await Page.find().lean().exec();
            return pages;
        } catch (error){
            console.log(error);
        }
    }
    async getPage(id){
        try {
            return await Page.findById(id).lean().exec();
        } catch (error){
            console.log(error);
        }
    }
    async createPage(data) {
        try {
            return await Page.create(data);
        } catch (error) {
            console.log(error)
        }
    }
    async updatePage(id, data) {
        try {
            return await Page.findByIdAndUpdate(id, data, {new: true}).exec();
        } catch (error) {
            console.log(error)
        }
    }
    async deletePage(id) {
        try {
            return await Page.findByIdAndDelete(id).lean().exec();
        } catch (error){
            console.log(error)
        }
    }

}
export default PageService