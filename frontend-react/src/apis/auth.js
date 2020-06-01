import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

export const getUserProfile = async ({ email, password }) => {
  const { data } = await axios.post(`${process.env.API_URL}/login`, { email, password }, { withCredentials: true });
  return data;
};

export const userLogout = async () => {
  const { data } = await axios.delete(`${process.env.API_URL}/login`, { withCredentials: true });
  return data;
};

export const userAuth = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/login`, { withCredentials: true });
  return data;
};

export const userSignUp = async (params) => {
  const { data } = await axios.post(`${process.env.API_URL}/sign_up`, params, { withCredentials: true });
  return data;
};

export const modifyInfo = async (params) => {
  const {data} = await axios.patch(`${process.env.API_URL}/modify_info`, params, { withCredentials: true });
  return data;
}
