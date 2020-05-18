import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.API_URL;

export const createPurchase = async (params) => {
  const data = await axios.post(`${URL}/userpurchase`, { ...params }, { withCredentials: true });
  return data;
};

export const getPurchase = async () => {
  const data = await axios.get(`${URL}/userpurchase`, { withCredentials: true });
  return data;
};
