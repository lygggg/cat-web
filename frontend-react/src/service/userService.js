import { userSignUp as apiUserSignUp } from '../apis/auth';
import { userLogout as apiUserLogout} from '../apis/auth'
import { userAuth as apiUserAuth } from '../apis/auth';
import { getUserProfile as apiGetUserProfile} from '../apis/auth';


export const userSignUp = async ({
  email, password, name, phoneNumber, location,
}) => {
  try {
    return await apiUserSignUp({
      email, password, name, phoneNumber, location,
    });
  } catch (e) {
    alert(e);
  }
};

export const userLogout = async () => {
  try {
    return await apiUserLogout();
  } catch (e) {
    alert(e);
  }
};

export const userAuth = async () => {
  try {
    return await apiUserAuth();
  } catch (e) {
    alert(e);
  }
};

export const getUserProfile = async ({ email, password }) => {
  try {
    return await apiGetUserProfile({ email, password });
  } catch (e) {
    alert(e);
  }
};
