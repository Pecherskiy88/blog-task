import { combineReducers } from "redux";
import fetchData from "./fetchFromApiReducer";

const rootReducer = combineReducers({
  fetchData
});

export default rootReducer;
