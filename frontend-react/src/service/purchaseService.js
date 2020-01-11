import { createPurchase as apiCreatePurchase } from '../apis/purchase';
import { getPurchase as apiGetPurchase } from '../apis/purchase'



export const createPurchase = async ({ title, category, price, description, imageurl, phoneNumber, account },count) => {
    try {
        return await apiCreatePurchase({ title, category, price, description, imageurl, phoneNumber, account },count);
    } catch (e) {
        alert(e);
    }
}

export const getPurchase = async () => {
    try {
        return await apiGetPurchase();
    } catch (e) {
        alert(e);
    }
}
