import * as Actions from "./types";
import {
  serviceActionPending,
  serviceActionError,
  serviceActionSuccess
} from "./ServiceActions";

const sanitizePullsUrl = string => string.replace("{/number}", "");

export const addPullRequests = payload => {
  return dispatch => {
    dispatch(serviceActionPending(Actions.ADD_PULLS_PENDING));
    fetch(sanitizePullsUrl(payload.pulls_url))
      .then(res => res.json())
      .then(res => {
        // Could also filter by cretad date...
        res.splice(10);
        payload = res.map(p => {
          return {
            id: p.id,
            title: p.title,
            number: p.number,
            status: p.state,
            author: p.user.login
          };
        });
        dispatch(serviceActionSuccess(payload, Actions.ADD_PULLS_SUCCEDED));
      })
      .catch(error => {
        console.error(error);
        dispatch(serviceActionError(error));
      });
  };
};
