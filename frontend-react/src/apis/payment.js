import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.API_URL;

export const getPrice = async (params) => {
    const { data } = await axios.post(`${URL}/payment`, params, { withCredentials: true });
    return data;
}