import axios from 'axios';

const USER_BASKET_URL = 'http://localhost:8080/userbasket'

export const putCart = async ({ productId, price, title, imageurl }) => {
    const data = await axios.post(USER_BASKET_URL, { productId, price, title, imageurl } );
    return data;
}

export const getCart = async () => {
    const data = await axios.get(USER_BASKET_URL);
    return data;
}

export const deleteCart = async (productId) => {
    const data = await axios.delete(USER_BASKET_URL, productId);
    return data;
}