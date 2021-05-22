import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducers";

const allReducers = combineReducers({
  EmployeeReducer,
});

export default allReducers;
