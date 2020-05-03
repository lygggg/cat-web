import axios from 'axios';
import URL from './url';

export const getReviewProduct = async (id) => {
    const { data } = await axios.get(`${URL}/reviewproduct` + `/${id}`, { withCredentials: true });
    return data;
}

export const createReview = async (params) => {
        const data = await axios.post(`${URL}/upload`,params, { withCredentials: true });
      return data;
}