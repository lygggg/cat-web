import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

export const putCart = async (params) => {
  const data = await axios.post(`${process.env.API_URL}/userbasket`, params, { withCredentials: true });
  return data;
};

export const getCart = async () => {
  const data = await axios.get(`${process.env.API_URL}/userbasket`, { withCredentials: true });
  return data;
};

export const deleteCart = async (productId) => {
  const data = await axios.delete(`${process.env.API_URL}/userbasket/${productId}`, { withCredentials: true });
  return data;
};

export const modifyCount = async (productId, count) => {
  const data = await axios.patch(`${process.env.API_URL}/userbasket`, { productId, count }, { withCredentials: true });
  return data;
};