import { combineReducers } from "redux";
import fetchData from "./fetchFromApiReducer";
import inputValue from "./inputReducer";

const rootReducer = combineReducers({
  fetchData,
  inputValue
});

export default rootReducer;
