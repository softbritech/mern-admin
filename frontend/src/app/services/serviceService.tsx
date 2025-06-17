import instance from "./index.tsx";

class ServiceService {

    getServices = async () => {
        try {
            const response = await instance.get('/services');
            return response.data;
        } catch (error){
            console.log(error)
        }
    }
    createService = async (data: any) => {
        try {
            const response = await instance.post('/services/new', data);
            return response.data;
        } catch (error){
            console.log(error)
        }
    }
    getServiceById = async (id: string ) => {
        try {
            const response = await instance.get(`/services/${id}`);
            return response.data;
        } catch (error){
            console.log(error)
        }
    }
    updateServiceById = async (id: string, body: any ) => {
        try {
            const { data } = await instance.put(`/services/${id}`, body);
            return data;
        } catch (error){
            console.log(error);
        }
    }
    deleteServiceById = async (id: string ) => {
        try {
            const { data } = await instance.delete(`/services/${id}`);
            return data;
        } catch (error){
            console.log(error);
        }
    }
}
export default new ServiceService();