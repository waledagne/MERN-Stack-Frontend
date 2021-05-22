import {
  FETCH_EMPLOYEE,
  LOAD_EMPLOYEE,
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./types";

// FETCH DATA FROM OUR NODE API

export const fetchEmployees = () => {
  return {
    type: FETCH_EMPLOYEE,
  };
};

export const loadEmployees = (data) => {
  return {
    type: LOAD_EMPLOYEE,
    data: data,
  };
};

// CREATE NEW EMPLOYEE
export const createEmployee = (data) => {
  return {
    type: CREATE_EMPLOYEE,
    payload: data,
  };
};

// EDIT EMPLOYEE
export const editEmployee = (data) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: data,
  };
};

// DELETE EMPLOYEE
export const deleteEmployee = (data) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: data,
  };
};
