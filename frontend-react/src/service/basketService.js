import { putCart as apiPutCart } from './apis/basket';
import { getCart as apiGetCart } from './apis/basket';
import { deleteCart as apiDeleteCart } from './apis/basket'; 
import { toggleItem as apiToggleItem } from './apis/basket';


export const putCart = async (productId, price, title, imageurl, productCount) => {
    try {
        return await apiPutCart(productId, price, title, imageurl, productCount);
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
        console.log(productId);
        return await apiDeleteCart(productId);
    } catch (e) {
        alert(e);
    }
}

export const toggleItem = async (productId) => {
    try {
        return await apiToggleItem(productId);
    } catch (e) {
        alert(e);
    }
}