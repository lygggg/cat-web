import axios from 'axios';

const USER_URL = 'http://localhost:8080/login';
const USER_SIGN_UP = 'http://localhost:8080/sign_up';
const USER_INFO_MODIFY = 'http://localhost:8080/modify_info';

export const getUserProfile = async ({ email, password }) => {
  const { data } = await axios.post(USER_URL, { email, password });
  return data;
};

export const userLogout = async () => {
  const { data } = await axios.delete(USER_URL);
  return data;
};

export const userAuth = async () => {
  const { data } = await axios.get(USER_URL);
  return data;
};

export const userSignUp = async (params) => {
  const { data } = await axios.post(USER_SIGN_UP, params);
  return data;
};

export const modifyInfo = async (params) => {
  const {data} = await axios.patch(USER_INFO_MODIFY, params);
  return data;
}
