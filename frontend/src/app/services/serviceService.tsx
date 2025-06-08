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
}
export default new ServiceService();