import {
  REPOS_FETCH_SUCCESS,
  REPOS_FETCH_FAILED,
  REPOS_FETCH_PENDING,
  FAV_REPOS_FECTH,
  REPO_SELECTED,
  FAV_REPOS_ADD,
  FAV_REPOS_REMOVE
} from "./types";

const topReposUrl =
  "https://api.github.com/search/repositories?sort=stars&q=language:js&order=desc";

export const topReposFetch = () => {
  //TODO: Handle pagination
  return dispatch => {
    dispatch(serviceActionPending());
    fetch(topReposUrl)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(serviceActionSuccess(responseJson.items));
      })
      .catch(error => {
        console.error(error);
        dispatch(serviceActionError(error));
      });
  };
};

export const addRepoToFav = payload => ({
  type: FAV_REPOS_ADD,
  payload
});

export const removeRepoFromFav = payload => ({
  type: FAV_REPOS_REMOVE,
  payload
});

export const serviceActionPending = () => ({
  type: REPOS_FETCH_PENDING
});

export const serviceActionError = error => ({
  type: REPOS_FETCH_FAILED,
  error
});

export const serviceActionSuccess = payload => ({
  type: REPOS_FETCH_SUCCESS,
  payload
});
