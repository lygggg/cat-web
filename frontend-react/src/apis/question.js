import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.API_URL;

export const getQuestions = async (params) => {
    const data = await axios.get(`${URL}/question` + `/${params}`, { withCredentials: true });
    return data;
}

export const createQuestions = async (params) => {
    const data = await axios.post(`${URL}/question`, params, { withCredentials: true });
    return data;
}