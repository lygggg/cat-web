import axios from "axios";
import URL from './url';

export const createPurchase = async (params) => {
  const data = await axios.post(`${URL}/userpurchase`, { ...params }, { withCredentials: true });
  return data;
};

export const getPurchase = async () => {
  const data = await axios.get(`${URL}/userpurchase`, { withCredentials: true });
  return data;
};
