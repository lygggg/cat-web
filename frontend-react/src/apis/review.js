import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.API_URL;

export const getReviewList = async (id) => {
    const { data } = await axios.get(`${URL}/reviewlist/${id}`, { withCredentials: true });
    return data;
}