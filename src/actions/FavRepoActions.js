import * as Actions from "./types";
import {
  serviceActionPending,
  serviceActionError,
  serviceActionSuccess
} from "./ServiceActions";

export const updateRepoInFav = url => {
  return dispatch => {
    dispatch(serviceActionPending(Actions.FAV_REPOS_PENDING));
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(updateRepoInFavSimple(responseJson));
      })
      .catch(error => {
        console.error(error);
        dispatch(serviceActionError(error, Actions.FAV_REPOS_FAILED));
      });
  };
};

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
