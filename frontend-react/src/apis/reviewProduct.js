import axios from 'axios';

const REVIEW_PRODUCT_URL = 'http://localhost:8080/review';

export const getReviewProduct = async (id) => {
    const { data } = await axios.get(REVIEW_PRODUCT_URL + `/${id}`);
    return data;
}