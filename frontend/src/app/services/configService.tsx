import instance from "./index.tsx";

class ConfigService {

    getConfig = async (lang?: string) => {
        try {
            const url = lang ? `/config?lang=${lang}` : '/config';
            const response = await instance.get(url);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
    getConfigById = async (id: string, lang?: string) => {
        try {
            let url = `/config/${id}`;
            if (lang) url += `?lang=${lang}`;
            const {data} = await instance.get(url);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    createConfig = async (data: any, lang?: string) => {
        try {
            const url = lang ? `/config?lang=${lang}` : '/config';
            const response = await instance.post(`${url}/new`, data);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
    updateConfig = async (id: string, data: any, lang?: string) => {
        try {
            let url = `/config/${id}`;
            if (lang) url += `?lang=${lang}`;
            const response = await instance.put(url, data);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    };
    deleteConfig = async (id: string, lang?: string) => {
        try {
            let url = `/config/${id}`;
            if (lang) url += `?lang=${lang}`;
            const response = await instance.delete(url);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    };
}

export default new ConfigService();