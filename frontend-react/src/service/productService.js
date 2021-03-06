import { getProducts as apiGetProducts } from "../apis/product";
import { getSliceProducts as apiGetSliceProducts } from "../apis/product";
import { getProductDetail as apiGetProductDetail } from "../apis/product";
import { createProduct as apiCreateProduct } from "../apis/product";
import { getSearchProducts as apiGetSearchProducts } from "../apis/product";

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
};

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
  title,
  category,
  price,
  description,
  imageurl,
  phoneNumber,
  account,
}) => {
  try {
    return await apiCreateProduct({
      title,
      category,
      price,
      description,
      imageurl,
      phoneNumber,
      account,
    });
  } catch (e) {
    alert(e);
  }
};
