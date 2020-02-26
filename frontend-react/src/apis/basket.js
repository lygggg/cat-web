import axios from 'axios';

const USER_BASKET_URL = 'http://localhost:8080/userbasket';

export const putCart = async (params) => {
  const data = await axios.post(USER_BASKET_URL, params);
  return data;
};

export const getCart = async () => {
  const data = await axios.get(USER_BASKET_URL);
  return data;
};

export const deleteCart = async (id) => {
  const data = await axios.delete(USER_BASKET_URL, { data: { productId: id } });
  return data;
};

export const modifyCount = async (productId, count) => {
  const data = await axios.patch(USER_BASKET_URL, { productId, count });
  return data;
};
