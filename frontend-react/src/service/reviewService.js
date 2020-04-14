import { getReviewProduct as apiGetReviewProduct } from '../apis/reviewProduct';
import { createReview as apiCreateReview } from '../apis/reviewProduct';

export const getReviewProduct = async (id) => {
    try {
        return await apiGetReviewProduct(id);
    } catch (e) {
        alert(e);
    }
};

export const createReview = async (params) => {
    try {
        return await apiCreateReview(params);
    } catch (e) {
        alert(e);
    }
};