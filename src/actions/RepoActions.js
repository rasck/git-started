import * as Actions from "./types";
import {
  serviceActionPending,
  serviceActionError,
  serviceActionSuccess
} from "./ServiceActions";

const topReposUrl =
  "https://api.github.com/search/repositories?sort=stars&q=language:js&order=desc";

export const topReposFetch = () => {
  //TODO: Handle pagination
  return dispatch => {
    dispatch(serviceActionPending(Actions.REPOS_FETCH_PENDING));
    fetch(topReposUrl)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(
          serviceActionSuccess(responseJson.items, Actions.REPOS_FETCH_SUCCESS)
        );
      })
      .catch(error => {
        console.error(error);
        dispatch(serviceActionError(error, Actions.REPOS_FETCH_FAILED));
      });
  };
};
