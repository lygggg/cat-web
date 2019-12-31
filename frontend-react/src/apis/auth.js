import axios from 'axios';

const USER_URL = 'http://localhost:8080/login';
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
    console.log(data);
    return data;
}

export const userBasket = async ({ itemId }) => {
    const { data } = await axios.post(USER_BASKET_URL, { itemId });
    return data;
}
