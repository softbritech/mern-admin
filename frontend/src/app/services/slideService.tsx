import instance from "./index.tsx";

class SlideService {
    getSlides = async () => {
        try {
            const response = await instance.get('/slides');
            return response.data;
        } catch (error){
            console.log(error);
        }
    }
    getSlideById = async (id: string) => {
        try {
            const response = await instance.get(`/slides/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    updateSlideById = async (id: string, body: any) => {
        try {
            const { data } = await instance.put(`/slides/${id}`, body)
            return data;
        } catch (error){
            console.log(error);
        }
    }
    deleteSlideById = async (id: string) => {
        try {
            const response = await instance.delete(`/slides/${id}`)
            return response.data;
        } catch (error){
            console.log(error)
        }
    }
}
export default new SlideService;