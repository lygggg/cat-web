import { putCart as apiPutCart } from './apis/basket';
import { getCart as apiGetCart } from './apis/basket';


export const putCart = async (productId) => {
    try {
        return await apiPutCart(productId);
    } catch (e) {
        alert(e);
    } 
}

export const getCart = async () => {
    try {
        return await apiGetCart();
    } catch (e) {
        alert(e);
    }
}