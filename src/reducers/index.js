import { combineReducers } from "redux";
import ReposReducer from "./ReposReducer";
import FavouritesReducer from "./FavouritesReducer";

export default combineReducers({
  repos: ReposReducer,
  fav: FavouritesReducer
});
