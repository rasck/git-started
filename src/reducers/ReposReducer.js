import {
  REPOS_FETCH_SUCCESS,
  REPOS_FETCH_PENDING,
  REPOS_FETCH_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  error: undefined,
  data: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPOS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload
      });
    case REPOS_FETCH_PENDING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case REPOS_FETCH_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};
