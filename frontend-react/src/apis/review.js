import axios from 'axios';

const REVIEW_PRODUCT_URL = 'http://localhost:3000/reviewlist';

export const getReviewList = async (id) => {
    console.log(id);
    const { data } = await axios.get(REVIEW_PRODUCT_URL + `/${id}`);
    return data;
}