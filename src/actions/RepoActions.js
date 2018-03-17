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
          return toRepoModel(r);
        });
        dispatch(serviceActionSuccess(repos, Actions.REPOS_FETCH_SUCCESS));
      })
      .catch(error => {
        console.error(error);
        dispatch(serviceActionError(error, Actions.REPOS_FETCH_FAILED));
      });
  };
};

const toRepoModel = r => {
  return {
    id: r.id,
    url: r.url,
    open_issues: r.open_issues,
    full_name: r.full_name,
    owner: r.owner,
    pulls_url: r.pulls_url,
    name: r.name,
    stargazers_count: r.stargazers_count
  };
};

const testModel = r => {
  return {
    id: "100000",
    url: "https://avatars3.githubusercontent.com/u/2775751?v=4",
    open_issues: "100",
    full_name: "Test repository",
    owner: "Test Owner",
    pulls_url:
      "https://api.github.com/repos/Dogfalo/materialize/pulls{/number}",
    name: "Test Name",
    stargazers_count: "999"
  };
};

export const fetchRepo = (repo, props) => {
  return dispatch => {
    dispatch(serviceActionPending(Actions.REPO_FETCH_PENDING));
    fetch(repo.url)
      .then(response => response.json())
      .then(responseJson => {
        const repoModel = toRepoModel(responseJson);
        dispatch(serviceActionSuccess(repoModel, Actions.REPO_FETCH_SUCCESS));
      })
      .catch(error => {
        console.error(error);
        dispatch(serviceActionError(error, Actions.REPO_FETCH_FAILED));
      });
  };
};
