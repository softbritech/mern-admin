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
    getPageById = async (id: string ) => {
        try {
            const { data } = await instance.get(`/pages/${id}`);
            return data;
        } catch (error){
            console.log(error);
        }
    }
    updatePostById = async (id: string, body: any ) => {
        try {
            const { data } = await instance.put(`/pages/${id}`, body);
            return data;
        } catch (error){
            console.log(error);
        }
    }
    createPost = async (data: any) => {
        try {
            const response = await instance.post('/pages/new', data);
            return response.data;
        } catch (error){
            console.log(error)
        }
    }
}
export default new PageService();