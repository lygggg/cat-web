import { getProducts as apiGetProducts } from '../apis/task';
import { getSliceProducts as apiGetSliceProducts } from '../apis/task';
import { getProductDetail as apiGetProductDetail } from '../apis/task';
import { createProduct as apiCreateProduct } from '../apis/task';
import { getSearchProducts as apiGetSearchProducts } from '../apis/task';
import styled from 'styled-components';



export const getProducts = async () => {
  try {
    return await apiGetProducts();
  } catch (e) {
    alert(e);
  }
};

export const getSearchProducts = async (string) => {
  try {
    return await apiGetSearchProducts(string);
  } catch (e) {
    alert(e);
  }
}

export const getSliceProducts = async ({ category, offset, limit }) => {
  try {
    return await apiGetSliceProducts({ category, offset, limit });
  } catch (e) {
    alert(e);
  }
};

export const getProductDetail = async (id) => {
  try {
    return await apiGetProductDetail(id);
  } catch (e) {
    alert(e);
  }
};

export const createProduct = async ({
  title, category, price, description, imageurl, phoneNumber, account,
}) => {
  try {
    return await apiCreateProduct({
      title, category, price, description, imageurl, phoneNumber, account,
    });
  } catch (e) {
    alert(e);
  }
};
