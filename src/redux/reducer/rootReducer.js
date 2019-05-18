import { combineReducers } from "redux";
import fetchData from "./fetchFromApiReducer";
import inputValue from "./inputReducer";
import sendComments from "./sendReducer";
import simpleData from "./fetchSimpleReducer";

const rootReducer = combineReducers({
  fetchData,
  inputValue,
  sendComments,
  simpleData
});

export default rootReducer;
