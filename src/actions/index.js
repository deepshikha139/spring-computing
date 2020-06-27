import { UsersAction } from "./Users";
import { bindActionCreators } from "redux";
import store from "../store";

// bind action with store here and dispatch
export const ActionCreator = bindActionCreators(
  {
    ...UsersAction,
  },
  store.dispatch
);
