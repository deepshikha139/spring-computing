import { userTypes } from "./types";

const postUserDetail = (detail) => ({
  type: userTypes.SET_USER_DETAIL,
  payload: detail,
});

const getUserDetail = () => ({
  type: userTypes.GET_USER_DETAIL,
});

export const UsersAction = {
  postUserDetail,
  getUserDetail,
};
