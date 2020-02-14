import { getPrice as apiGetPrice } from '../apis/payment';

export const getPrice = async (product) => {
    try {
        return await apiGetPrice(product);
    } catch (e) {
        alert(e);
    }
}