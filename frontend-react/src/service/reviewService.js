import { getReviewProduct as apiGetReviewProduct } from '../apis/reviewProduct'

export const getReviewProduct = async (id) => {
    try {
        return await apiGetReviewProduct(id);
    } catch (e) {
        alert(e);
    }
};