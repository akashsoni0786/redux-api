import { setusername } from "./Actions";

export const mapStatetoprops = (state) => {
  return {
    ...state
  };
};
export const mapDispatchtoprops = (dispatch) => {
  return {
    users_name: (e) => dispatch(setusername(e))
  };
};


