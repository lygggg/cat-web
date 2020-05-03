import axios from 'axios';
import URL from './url';

export const getQuestions = async (params) => {
    const data = await axios.get(`${URL}/question` + `/${params}`, { withCredentials: true });
    return data;
}

export const createQuestions = async (params) => {
    const data = await axios.post(`${URL}/question`, params, { withCredentials: true });
    return data;
}