import axios from 'axios';

const REVIEW_PRODUCT_URL = 'http://localhost:8080/reviewproduct';

export const getReviewProduct = async (id) => {
    const { data } = await axios.get(REVIEW_PRODUCT_URL + `/${id}`);
    return data;
}

export const createReview = async (params) => {
        console.log(params); 
        const data = await axios.post("http://localhost:3000/upload",params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      return data;
}