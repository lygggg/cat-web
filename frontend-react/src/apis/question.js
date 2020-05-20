import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

export const getQuestions = async (params) => {
    const data = await axios.get(`${process.env.API_URL}/question` + `/${params}`, { withCredentials: true });
    return data;
}

export const createQuestions = async (params) => {
    const data = await axios.post(`${process.env.API_URL}/question`, params, { withCredentials: true });
    return data;
}