import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

export const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/products`, { withCredentials: true });
  return data;
};

export const getSliceProducts = async ({ category, offset, limit }) => {
  const { data } = await axios.post(`http://ec2-13-125-74-163.ap-northeast-2.compute.amazonaws.com:3000/products`, { category, offset, limit }, { withCredentials: true })
  return data;
};

export const getProductDetail = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/products` + `/${id}`, { withCredentials: true });
  return data;
};

export const createProduct = async ({
  title, category, price, description,
  imageurl, phoneNumber, account,
}) => {
  const { data } = await axios.post(`${URL}/products/new`, {
    title, category, price, description, imageurl, phoneNumber, account,
  }, { withCredentials: true });
  return data;
};

export const getSearchProducts = async (string) => {
  const { data } = await axios.get(`${URL}/search` + `?q=${string}`, { withCredentials: true } );
  return data;
};
