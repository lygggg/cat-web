import axios from 'axios';

const USER_URL = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/login';
const USER_SIGN_UP = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/sign_up';
const USER_INFO_MODIFY = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/modify_info';

export const getUserProfile = async ({ email, password }) => {
  const { data } = await axios.post(USER_URL, { email, password }, { withCredentials: true });
  return data;
};

export const userLogout = async () => {
  const { data } = await axios.delete(USER_URL, { withCredentials: true });
  return data;
};

export const userAuth = async () => {
  const { data } = await axios.get(USER_URL, { withCredentials: true });
  return data;
};

export const userSignUp = async (params) => {
  const { data } = await axios.post(USER_SIGN_UP, params, { withCredentials: true });
  return data;
};

export const modifyInfo = async (params) => {
  const {data} = await axios.patch(USER_INFO_MODIFY, params, { withCredentials: true });
  return data;
}
