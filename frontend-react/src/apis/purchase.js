import axios from 'axios';

const USER_PURCHASE_URL = 'http://localhost:8080/userpurchase';

export const createPurchase = async (params) => {
  const data = await axios.post(USER_PURCHASE_URL, { ...params });
  return data;
};

export const getPurchase = async () => {
  const data = await axios.get(USER_PURCHASE_URL);
  return data;
};
