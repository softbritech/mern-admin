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

}

export default new PostService();