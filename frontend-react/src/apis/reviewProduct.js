import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

export const getReviewProduct = async (id) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/reviewproduct` + `/${id}`,
    { withCredentials: true }
  );
  return data;
};

export const createReview = async (params) => {
  const data = await axios.post(`${process.env.API_URL}/upload`, params, {
    withCredentials: true,
  });
  return data;
};
