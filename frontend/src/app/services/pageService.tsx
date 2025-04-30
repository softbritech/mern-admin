import instance from "./index.tsx";

class PageService {
    getPages = async () => {
        try {
            const response = await instance.get('/pages');
            return response.data;
        } catch (error){
            console.log(error);
        }
    }
}
export default new PageService();