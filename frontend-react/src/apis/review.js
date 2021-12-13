import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

export const getReviewList = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/reviewlist/${id}`, {
    withCredentials: true,
  });
  return data;
};
