import axios from 'axios';

const USER_BASKET_URL = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/userbasket';

export const putCart = async (params) => {
  const data = await axios.post(USER_BASKET_URL, params, { withCredentials: true });
  return data;
};

export const getCart = async () => {
  const data = await axios.get(USER_BASKET_URL, { withCredentials: true });
  return data;
};

export const deleteCart = async (id) => {
  const data = await axios.delete(USER_BASKET_URL, { data: { productId: id } }, { withCredentials: true });
  return data;
};

export const modifyCount = async (productId, count) => {
  const data = await axios.patch(USER_BASKET_URL, { productId, count }, { withCredentials: true });
  return data;
};
