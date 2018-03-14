import { combineReducers } from "redux";
import ReposReducer from "./ReposReducer";

export default combineReducers({
  repos: ReposReducer
});
