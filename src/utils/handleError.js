import axios from 'axios';
import config from '../configs';


const handleError = async (error) => {
    const originalRequest = error.config;
    if (error.response.data.msg === 'jwt expired') {
        originalRequest._retry = true;
        const session = localStorage.getItem('Auth')
            ? JSON.parse(localStorage.getItem('Auth')) : {};
        try {
            const res = await axios.get(`${config.api_host_dev}/cms/refresh-token/${session.refreshToken}`);
            if (res?.data?.data) {
                localStorage.setItem('Auth',
                    JSON.stringify({
                        ...session,
                        token: res.data.data.token,
                    })
                );
                originalRequest.headers.Authorization = `Bearer ${res.data.data.token}`;
                console.log(originalRequest);
                return axios(originalRequest);
            };
        } catch (err) {
            window.location.href = "/login";
            localStorage.removeItem("Auth");
        }
        return error;
    }
}

export default handleError;