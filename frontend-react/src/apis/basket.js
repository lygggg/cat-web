import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.API_URL;

export const putCart = async (params) => {
  const data = await axios.post(`${URL}/userbasket`, params, { withCredentials: true });
  return data;
};

export const getCart = async () => {
  const data = await axios.get(`${URL}/userbasket`, { withCredentials: true });
  return data;
};

export const deleteCart = async (productId) => {
  const data = await axios.delete(`${URL}/userbasket/${productId}`, { withCredentials: true });
  return data;
};

export const modifyCount = async (productId, count) => {
  const data = await axios.patch(`${URL}/userbasket`, { productId, count }, { withCredentials: true });
  return data;
};