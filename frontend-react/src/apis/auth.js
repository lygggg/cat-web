import axios from 'axios';
import URL from './url';

export const getUserProfile = async ({ email, password }) => {
  const { data } = await axios.post(`${URL}/login`, { email, password }, { withCredentials: true });
  return data;
};

export const userLogout = async () => {
  const { data } = await axios.delete(`${URL}/login`, { withCredentials: true });
  return data;
};

export const userAuth = async () => {
  const { data } = await axios.get(`${URL}/login`, { withCredentials: true });
  return data;
};

export const userSignUp = async (params) => {
  const { data } = await axios.post(`${URL}/sign_up`, params, { withCredentials: true });
  return data;
};

export const modifyInfo = async (params) => {
  const {data} = await axios.patch(`${URL}/modify_info`, params, { withCredentials: true });
  return data;
}
