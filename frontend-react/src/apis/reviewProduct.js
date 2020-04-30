import axios from 'axios';

const REVIEW_PRODUCT_URL = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/reviewproduct';

export const getReviewProduct = async (id) => {
    const { data } = await axios.get(REVIEW_PRODUCT_URL + `/${id}`, { withCredentials: true });
    return data;
}

export const createReview = async (params) => {
        const data = await axios.post("http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/upload",params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }, { withCredentials: true });
      return data;
}