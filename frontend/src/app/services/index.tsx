import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;


const instance = axios.create({
    baseURL: `${apiUrl}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.response.use(
    res => res,
    err => {
        console.error('Axios error:', err.response);
        return Promise.reject(err);
    }
);

export default instance;