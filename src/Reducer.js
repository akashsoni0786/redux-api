export const initialState = {
    name: '',
  };
  
  const myReducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
      return { name: action.username};
    }
    
    return state;
  };
  export default myReducer;