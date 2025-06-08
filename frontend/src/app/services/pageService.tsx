import instance from "./index.tsx";

class PageService {
    getPages = async () => {
        try {
            const response = await instance.get('/pages');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    getPageById = async (id: string) => {
        try {
            const {data} = await instance.get(`/pages/${id}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    updatePageById = async (id: string, payload: FormData | Record<string, any>) => {
        console.log('Payload for update:', payload);
        console.log('Is payload instance of FormData?', payload instanceof FormData);
        try {
            const {data} = await instance.patch(`/pages/${id}`, payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    createPage = async (data: any) => {
        try {
            const response = await instance.post('/pages/new', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
    deletePage = async (id) => {
        try {
            const {data} = await instance.delete(`/pages/${id}`);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new PageService();