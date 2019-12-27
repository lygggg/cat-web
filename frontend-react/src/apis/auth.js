import axios from 'axios';

const USER_URL = 'http://localhost:8080/login';

export const getUserProfile = async ({email, password}) => {
    const { data } = await axios.post(USER_URL, { email, password })
    return data;
}