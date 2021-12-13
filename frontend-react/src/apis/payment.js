import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

export const getPrice = async (params) => {
  const { data } = await axios.post(`${process.env.API_URL}/payment`, params, {
    withCredentials: true,
  });
  return data;
};
