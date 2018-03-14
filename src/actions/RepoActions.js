import {
  REPOS_FETCH_SUCCESS,
  REPOS_FETCH_FAILED,
  REPOS_FETCH_PENDING
} from "./types";
import axios from "react-native-axios";

// export const topReposFetch = () => {
//   //   const { currentUser } = firebase.auth();
//   //  // use redux thunk with function instead of action object
//   //  return (dispatch) => {
//   //      firebase.database().ref(`/users/${currentUser.uid}/employee`)
//   //      // Any time any time we get any 'value' from our bucket
//   //      // call our callback function with an object (snapshot)
//   //      // the snapshot is an object (metadata) from which we can get a handle
//   //      // to get the employees
//   //      // snapshot.val() is the data.
//   //      .on('value', snapshot => {
//   //          dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
//   //      });
//   //  };
//   return {
//     type: REPOS_FETCH_SUCCESS,
//     payload: [
//       {
//         key: 0,
//         name: "free code camp",
//         stars: 30000
//       },
//       {
//         key: 1,
//         name: "debitoor",
//         stars: 1000000
//       }
//     ]
//   };
// };

export const topReposFetch2 = () => {
  return {
    type: REPOS_FETCH_SUCCESS,
    payload: [
      {
        key: 0,
        name: "free code camp",
        stars: 30000
      },
      {
        key: 1,
        name: "debitoor",
        stars: 1000000
      }
    ]
  };
};

export const topReposFetch = () => {
  //TODO: Handle pagination
  console.log("dispatching...");
  return dispatch => {
    console.log("dispatch called!");
    dispatch(serviceActionPending());
    axios
      .get(
        "https://api.github.com/search/repositories?sort=stars&q=language:js&order=desc"
      )
      .then(response => {
        console.log(repsonse);
        console.log("....................");
        dispatch(serviceActionSuccess({}));
      })
      .catch(error => {
        console.log("error");
        console.log(error);
        dispatch(serviceActionError(error));
      });
  };
};

export const serviceActionPending = () => ({
  type: REPOS_FETCH_PENDING
});

export const serviceActionError = error => ({
  type: REPOS_FETCH_FAILED,
  error: error
});

export const serviceActionSuccess = payload => ({
  type: REPOS_FETCH_SUCCESS,
  payload
});
