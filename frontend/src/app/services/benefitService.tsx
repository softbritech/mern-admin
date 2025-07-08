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

}

export default new BenefitService();