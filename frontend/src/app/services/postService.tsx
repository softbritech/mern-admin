import instance from "./index.tsx";

class PostService {
    getPosts = async () => {
        try {
            const response = await instance.get('/posts');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    createPost = async (data: any) => {
        try {
            const response = await instance.post('/posts/new', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error){
            console.log(error)
        }
    }
    getPostById = async (id: string ) => {
        try {
            const { data } = await instance.get(`/posts/${id}`);
            return data;
        } catch (error){
            console.log(error);
        }
    }
    updatePostById = async (id: string, body: any ) => {
        try {
            const { data } = await instance.patch(`/posts/${id}`, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        } catch (error){
            console.log(error);
        }
    }
    deletePostById = async (id: string ) => {
        try {
            const { data } = await instance.delete(`/posts/${id}`);
            return data;
        } catch (error){
            console.log(error);
        }
    }
    deleteAll = async () => {

    }
}

export default new PostService();