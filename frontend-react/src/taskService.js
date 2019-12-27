import { getProducts as apiGetProducts } from './apis/task';
import { getSliceProducts as apiGetSliceProducts } from './apis/task';
import { getProductDetail as apiGetProductDetail } from './apis/task';
import { createProduct as apiCreateProduct } from './apis/task';
import { getUserProfile as apiGetUserProfile} from './apis/auth';


export const getProducts = async () => {
    try {
        console.log(apiGetProducts());
        return await apiGetProducts();
    } catch (e) {
        alert(e);
    }   
};

export const getSliceProducts = async ({ category, offset, limit }) => {
    try {
        return await  apiGetSliceProducts({ category, offset, limit });
    } catch (e) {
        alert(e);
    }
}

export const getProductDetail = async (id) => {
    try {
        return await apiGetProductDetail(id);
    } catch (e) {
        alert(e);
    }
} 

export const createProduct = async ({ title, category, price, description, imageurl, phoneNumber, account }) => {
    try {
        return await apiCreateProduct({ title, category, price, description, imageurl, phoneNumber, account });
    } catch (e) {
        alert(e);
    }
}

export const getUserProfile = async ({ email, password }) => {
    try {
        return await apiGetUserProfile({ email, password });
    } catch (e) {
        alert(e);
    }
}