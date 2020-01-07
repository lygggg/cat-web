import { putCart as apiPutCart } from './apis/basket';
import { getCart as apiGetCart } from './apis/basket';
import { deleteCart as apiDeleteCart } from './apis/basket'; 


export const putCart = async (productId, price, title, imageurl) => {
    try {
        return await apiPutCart(productId, price, title, imageurl);
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

export const deleteCart = async (productId) => {
    try {
        return  await apiDeleteCart(productId);
    } catch (e) {
        alert(e);
    }
}