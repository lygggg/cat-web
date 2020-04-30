import axios from 'axios';

const REVIEW_PRODUCT_URL = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/reviewlist';

export const getReviewList = async (id) => {
    const { data } = await axios.get(REVIEW_PRODUCT_URL + `/${id}`, { withCredentials: true });
    return data;
}