import axios from 'axios';
import URL from './url';

export const getPrice = async (params) => {
    const { data } = await axios.post(`${URL}/payment`, params, { withCredentials: true });
    return data;
}