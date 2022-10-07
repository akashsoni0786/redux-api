import { LOGIN } from "./Types";

export const setusername = (a) => {
    return {
      type: LOGIN,
      username:a
    };
  };