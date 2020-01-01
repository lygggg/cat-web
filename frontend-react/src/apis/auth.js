import axios from 'axios';

const USER_URL = 'http://localhost:8080/login';
const USER_SIGN_UP = 'http://localhost:3000/sign_up'
const USER_BASKET_URL = 'http://localhost:3000/user_basket'

export const getUserProfile = async ({email, password}) => {
    const { data } = await axios.post(USER_URL, { email, password });
    return data;
}

export const userLogout = async () => {
    const { data } = await axios.delete(USER_URL);
}

export const userAuth = async () => {
    const { data } = await axios.get(USER_URL);
    return data;
}

export const userSignUp = async (params) => {
    const { data } = await axios.post(USER_SIGN_UP,params);
}

export const userBasket = async ({ productId }) => {
    const { data } = await axios.post(USER_BASKET_URL, { productId });
    return data;
}
