import { getReviewProduct as apiGetReviewProduct } from '../apis/reviewProduct';
import { createReview as apiCreateReview } from '../apis/reviewProduct';
import { getReviewList as apiGetReviewList } from '../apis/review'

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

export const getReviewList = async (id) => {
    try {
        return await apiGetReviewList(id);
    } catch (e) {
        alert(e);
    }
}