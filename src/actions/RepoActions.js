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
        const repos = responseJson.items.map(r => {
          return {
            id: r.id,
            open_issues: r.open_issues,
            owner: r.owner,
            name: r.name,
            stargazers_count: r.stargazers_count
          };
        });
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

export const fetchRepo = repo => {
  return dispatch => {
    dispatch(serviceActionPending(Actions.REPO_FETCH_PENDING));
    fetch(topReposUrl)
      .then(response => response.json())
      .then(responseJson => {
        const repo = {
          id: responseJson.id,
          open_issues: responseJson.open_issues,
          owner: responseJson.owner,
          name: responseJson.name,
          stargazers_count: responseJson.stargazers_count
        };

        dispatch(
          serviceActionSuccess(responseJson.items, Actions.REPO_FETCH_SUCCESS)
        );
      })
      .catch(error => {
        console.error(error);
        dispatch(serviceActionError(error, Actions.REPO_FETCH_FAILED));
      });
  };
};

export const selectRepo = repo => ({
  type: Actions.SELECT_REPO,
  payload: repo
});
