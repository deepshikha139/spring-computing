import { userTypes } from "../actions/Users/types";
// reducers will take initial state and actions

const INITIAL_STATE = {
  detail: [],
};

const UsersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userTypes.SET_USER_DETAIL: {
      console.log("iiiiiiii", payload);
      return { ...state, detail: payload };
    }
    case userTypes.GET_USER_DETAIL: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default UsersReducer;
