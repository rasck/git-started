import * as Actions from "./types";
import {
  serviceActionPending,
  serviceActionError,
  serviceActionSuccess
} from "./ServiceActions";


export const addRepoToFav = payload => ({
  type: Actions.FAV_REPOS_ADD,
  payload
});

export const updateRepoInFavSimple = payload => ({
  type: Actions.FAV_REPOS_UPDATE,
  payload
});

export const removeRepoFromFav = payload => ({
  type: Actions.FAV_REPOS_REMOVE,
  payload
});


