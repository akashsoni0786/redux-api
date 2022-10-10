import { createStore } from "redux";
import myReducer from "./redux/Reducer";

const store = createStore(myReducer);

export default store;
