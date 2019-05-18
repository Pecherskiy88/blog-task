import { combineReducers } from "redux";
import fetchData from "./fetchFromApiReducer";
import inputValue from "./inputReducer";
import simpleData from "./fetchSimpleReducer";

const rootReducer = combineReducers({
  fetchData,
  inputValue,
  simpleData
});

export default rootReducer;
