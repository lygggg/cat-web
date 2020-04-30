import axios from "axios";

const USER_PURCHASE_URL = "http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/userpurchase";

export const createPurchase = async (params) => {
  const data = await axios.post(USER_PURCHASE_URL, { ...params }, { withCredentials: true });
  return data;
};

export const getPurchase = async (params) => {
  const data = await axios.get(USER_PURCHASE_URL, {
    params: {
      isReview: params,
    },
  }, { withCredentials: true });
  return data;
};
