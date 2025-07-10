import instance from "./index.tsx";

class BenefitService {
    getBenefits = async () => {
        try {
            const response = await instance.get('/benefits');
            return response.data;
        } catch (error){
            console.log(error);
        }
    }
    getBenefitById = async  (id: any) => {
        try {
            const response = await instance.get(`/benefits/${id}`);
            return response.data;
        } catch (error){
            console.log(error);
        }
    }
    createBenefit = async (data: any) => {
        try {
            const response = await instance.post('/benefits/new', data);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
    deleteBenefit = async (id: any) => {
        try {
            const {data} = await instance.delete(`/benefits/${id}`);
            return data;
        } catch (error) {
            console.log(error)
        }
    }

}

export default new BenefitService();