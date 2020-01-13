import axios from 'axios';

const USER_BASKET_URL = 'http://localhost:8080/userbasket'
const USER_BASKET_TOGGLE_URL = 'http://localhost:8080/toggle' 

export const putCart = async (params) => {
    const data = await axios.post(USER_BASKET_URL, params);
    return data;
}

export const getCart = async () => {
    const data = await axios.get(USER_BASKET_URL);
    return data;
}

export const deleteCart = async (productId) => {
    const data = await axios.delete(USER_BASKET_URL, { data: {productId: productId} });
    return data;
}

export const toggleItem = async (productId) => {
    const data = await axios.patch(USER_BASKET_URL, { productId });
    return data;
}
