export const initialState = {
    name: '',
  };
  
  const myReducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
      return { name: action.username};
    }
    if(action.type === "LOGOUT"){
      return { name : ""}
    }
    
    return state;
  };
  export default myReducer;