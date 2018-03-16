import {
  FAV_REPOS_ADD,
  FAV_REPOS_REMOVE,
  FAV_REPOS_UPDATE
} from "../actions/types";

const INITIAL_STATE = {
  data: []
};

const remove = (array, element) => {
  return array.filter(e => e.id !== element.id);
};
//https://github.com/reactjs/redux/blob/master/docs/recipes/reducers/ImmutableUpdatePatterns.md
function update(array, element) {
  return array.map(item => {
    if (item.id !== element.id) {
      // This isn't the item we care about - keep it as-is
      return item;
    }
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...element
    };
  });
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAV_REPOS_ADD:
      action.payload.shouldUpdate = true;
      const newState = Object.assign({}, state, {
        data: [...state.data, action.payload]
      });
      return newState;
    case FAV_REPOS_REMOVE:
      return Object.assign({}, state, {
        data: remove(state.data, action.payload)
      });
    case FAV_REPOS_UPDATE:
      console.log("updating");
      action.payload.shouldUpdate = true;
      return Object.assign({}, state, {
        data: update(state.data, action.payload)
      });
    default:
      return state;
  }
};
