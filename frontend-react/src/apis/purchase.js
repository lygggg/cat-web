import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

export const createPurchase = async (params) => {
  const data = await axios.post(
    `${process.env.API_URL}/userpurchase`,
    { ...params },
    { withCredentials: true }
  );
  return data;
};

export const getPurchase = async () => {
  const data = await axios.get(`${process.env.API_URL}/userpurchase`, {
    withCredentials: true,
  });
  return data;
};
