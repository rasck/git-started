import {
  REPOS_FETCH_SUCCESS,
  REPOS_FETCH_PENDING,
  REPOS_FETCH_FAILED,
  REPOS_FILTER
} from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  error: undefined,
  data: null
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
    case REPOS_FILTER:
      return Object.assign({}, state, {
        data: state.data.filter(r => {
          return r.name.toLocaleLowerCase().startsWith(action.payload);
        })
      });
    default:
      return state;
  }
};
