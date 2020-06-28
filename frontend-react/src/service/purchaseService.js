import { createPurchase as apiCreatePurchase } from "../apis/purchase";
import { getPurchase as apiGetPurchase } from "../apis/purchase";

export const createPurchase = async (params) => {
  try {
    return await apiCreatePurchase(params);
  } catch (e) {
    alert(e);
  }
};

export const getPurchase = async (params) => {
  try {
    return await apiGetPurchase(params);
  } catch (e) {
    alert(e);
  }
};
