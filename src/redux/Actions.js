import { LOGIN, LOGOUT } from "./Types";

export const setusername = (a) => {
  return {
    type: LOGIN,
    username: a,
  };
};

export const logoutuser = (a) => {
  return {
    type: LOGOUT,
  };
};
