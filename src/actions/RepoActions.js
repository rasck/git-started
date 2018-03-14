import {
  REPOS_FETCH_SUCCESS,
  REPOS_FETCH_FAILED,
  REPOS_FETCH_PENDING
} from "./types";

const topReposUrl =
  "https://api.github.com/search/repositories?sort=stars&q=language:js&order=desc";
const testUrl =
  "https://api.github.com/search/repositories?sort=stars&q=canvasapp-nodeJS-base&language=js&order=desc";

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
