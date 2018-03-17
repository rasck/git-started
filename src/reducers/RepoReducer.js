import {
  REPO_FETCH_SUCCESS,
  REPO_FETCH_PENDING,
  REPO_FETCH_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  error: undefined,
  repo: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPO_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        repo: action.payload
      });
    case REPO_FETCH_PENDING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case REPO_FETCH_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};
