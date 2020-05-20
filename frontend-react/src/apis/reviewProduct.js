import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.API_URL;

export const getReviewProduct = async (id) => {
  console.log(URL);
    const { data } = await axios.get(`${URL}/reviewproduct` + `/${id}`, { withCredentials: true });
    return data;
}

export const createReview = async (params) => {
        const data = await axios.post(`${URL}/upload`,params, { withCredentials: true });
      return data;
}