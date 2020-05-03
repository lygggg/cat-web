import axios from 'axios';
import URL from './url';

export const getReviewList = async (id) => {
    console.log(id,'dasds');
    const { data } = await axios.get(`${URL}/reviewlist/${id}`, { withCredentials: true });
    return data;
}