import axios from 'axios';

const PAYMENT_PRICE_URL = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/payment';

export const getPrice = async (params) => {
    const { data } = await axios.post(PAYMENT_PRICE_URL, params, { withCredentials: true });
    return data;
}