import axios from 'axios';
import URL from './url';

export const putCart = async (params) => {
  const data = await axios.post(`${URL}/userbasket`, params, { withCredentials: true });
  return data;
};

export const getCart = async () => {
  const data = await axios.get(`${URL}/userbasket`, { withCredentials: true });
  return data;
};

export const deleteCart = async (id) => {
  const data = await axios.delete(`${URL}/userbasket`, { data: { productId: id } }, { withCredentials: true });
  return data;
};

export const modifyCount = async (productId, count) => {
  const data = await axios.patch(`${URL}/userbasket`, { productId, count }, { withCredentials: true });
  return data;
};
