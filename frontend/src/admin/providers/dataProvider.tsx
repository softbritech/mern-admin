import postService from "../../app/services/postService.tsx";

const apiUrl = import.meta.env.VITE_APP_API_URL;
console.log("Base URL is:", apiUrl);

const dataProvider = {
    getList: async (resource, params) => {
        if(resource === 'posts'){

            const response = await postService.getPosts();
            return {
                data: response.map(item => ({
                    ...item,
                    id: item._id,
                })),
                total: response.length,
            }
        }
    }

}
export default dataProvider;