import axios from "axios";
import config from '../configs';
import handleError from "./handleError";


export async function getData(url, params) {
    try {
        const { token } = localStorage.getItem('Auth')
            ? JSON.parse(localStorage.getItem('Auth')) :
            {};
        const res = await axios.get(`${config.api_host_dev}${url}`, {
            params,
            headers: { Authorization: `Bearer ${token}` }
        });
        return res;
    } catch (error) {
        return handleError(error);
    }
}

export async function postData(url, payload, formData) {
    try {
        const { token } = localStorage.getItem('Auth')
            ? JSON.parse(localStorage.getItem('Auth')) :
            {};
        const res = await axios.post(`${config.api_host_dev}${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': formData ? 'multipart/form-data' : 'application/json'
            }
        });
        return res;
    } catch (error) {
        return handleError(error);
    }
};

export async function putData(url, payload) {
    try {
        const { token } = localStorage.getItem('Auth')
            ? JSON.parse(localStorage.getItem('Auth')) :
            {};
        const res = await axios.put(`${config.api_host_dev}${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return res;
    } catch (error) {
        return handleError(error);
    }
}

export async function deleteData(url) {
    try {
        const { token } = localStorage.getItem('Auth')
            ? JSON.parse(localStorage.getItem('Auth')) :
            {};

        const res = await axios.delete(`${config.api_host_dev}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return res;
    } catch (error) {
        return handleError(error);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData,
    postData,
    putData,
    deleteData
}   
