import {
  FAV_REPOS_ADD,
  FAV_REPOS_REMOVE,
} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  selectedRepo: null
};

function remove(array, element) {
  return array.filter(e => e.id !== element.id);
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAV_REPOS_ADD:
      const newState = Object.assign({}, state, {
        data: [...state.data, action.payload]
      });
      return newState;
    case FAV_REPOS_REMOVE:
      return Object.assign({}, state, {
        data: remove(state.data, action.payload)
      });
    default:
      return state;
  }
};
