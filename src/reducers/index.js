import { combineReducers } from "redux";
import ReposReducer from "./ReposReducer";
import FavouritesReducer from "./FavouritesReducer";
import PullsReducer from "./PullsReducer";
import RepoReducer from "./RepoReducer";

export default combineReducers({
  repos: ReposReducer,
  repo: RepoReducer,
  fav: FavouritesReducer,
  pulls: PullsReducer
});
