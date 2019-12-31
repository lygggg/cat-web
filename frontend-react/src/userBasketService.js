import { userBasket as apiUserBasket } from './apis/auth';

export const putProduct = async({ itemId }) => {
    try {
        return await apiUserBasket({ itemId });
    } catch (e) {
        alert(e);
    }
}