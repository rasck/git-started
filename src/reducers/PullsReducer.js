import {
  ADD_PULLS_SUCCEDED,
  ADD_PULSS_FAILED,
  ADD_PULLS_PENDING
} from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  error: undefined,
  data: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PULLS_SUCCEDED:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload
      });
    case ADD_PULLS_PENDING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case ADD_PULSS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};
