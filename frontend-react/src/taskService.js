import { getProducts as apiGetProducts } from './apis/task';
import { getSliceProducts as apiGetSliceProducts} from './apis/task';
import { getProduct as apiGetProduct } from './apis/task'

export const getProducts = async () => {
    try {
        return await apiGetProducts();
    } catch (e) {
        console.error(e);
    }
};

export const getSliceProducts = async ({ category, offset, limit }) => {
    try {
        console.log('das');
        return await  apiGetSliceProducts({ category, offset, limit });
    } catch (e) {
        console.error(e);
    }
}

export const getProduct = async (id) => {
    try {
        return await apiGetProduct(id);
    } catch (e) {
        console.error(e);
    }
} 
