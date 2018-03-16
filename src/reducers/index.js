import { combineReducers } from "redux";
import ReposReducer from "./ReposReducer";
import FavouritesReducer from "./FavouritesReducer";
import PullsReducer from "./PullsReducer";

export default combineReducers({
  repos: ReposReducer,
  fav: FavouritesReducer,
  pulls: PullsReducer
});
