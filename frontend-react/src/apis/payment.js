import axios from 'axios';

const PAYMENT_PRICE_URL = 'http://localhost:3000/payment';

export const getPrice = async (params) => {
    const { data } = await axios.post(PAYMENT_PRICE_URL, params);
    return data;
}