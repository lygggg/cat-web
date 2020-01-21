import { putCart as apiPutCart } from '../apis/basket';
import { getCart as apiGetCart } from '../apis/basket';
import { deleteCart as apiDeleteCart } from '../apis/basket'; 
import { toggleItem as apiToggleItem } from '../apis/basket';


export const putCart = async (params) => {
  try {
    return await apiPutCart(params);
  } catch (e) {
    alert(e);
  }
};

export const getCart = async () => {
  try {
    return await apiGetCart();
  } catch (e) {
    alert(e);
  }
};

export const deleteCart = async (productId) => {
  try {
    return await apiDeleteCart(productId);
  } catch (e) {
    alert(e);
  }
};

export const toggleItem = async (productId) => {
  try {
    return await apiToggleItem(productId);
  } catch (e) {
    alert(e);
  }
};
