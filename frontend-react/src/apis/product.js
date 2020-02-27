import axios from 'axios';

const CATEGORIES_URL = 'http://localhost:3000/categories';
const PRODUCTS_URL = 'http://localhost:3000/products';
const SEARCH_PRODUCTS_URL = 'http://localhost:3000/search';
const PRODUCTS_URL_NEW = 'http://localhost:3000/products/new';

export const getProducts = async () => {
  const { data } = await axios.get(PRODUCTS_URL);
  return data;
};

export const getCategories = async () => {
  const { data } = await axios.get(CATEGORIES_URL);
  return data;
};

export const getSliceProducts = async ({ category, offset, limit }) => {
  const { data } = await axios.post(PRODUCTS_URL, { category, offset, limit })
  return data;
};

export const getProductDetail = async (id) => {
  const { data } = await axios.get(PRODUCTS_URL + `/${id}`);
  return data;
};

export const createProduct = async ({
  title, category, price, description,
  imageurl, phoneNumber, account,
}) => {
  const { data } = await axios.post(PRODUCTS_URL_NEW, {
    title, category, price, description, imageurl, phoneNumber, account,
  });
  return data;
};

export const getSearchProducts = async (string) => {
  const { data } = await axios.get(SEARCH_PRODUCTS_URL + `?q=${string}` );
  return data;
};
