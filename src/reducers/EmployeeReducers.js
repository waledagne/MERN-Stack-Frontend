import {
  FETCH_EMPLOYEE,
  LOAD_EMPLOYEE,
  CREATE_EMPLOYEE,
  CREATE_SUCCESS,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  NETWORK_ERROR,
  EDIT_SUCCESS,
  DELETE_SUCCESS,
} from "../actions/types";

const initialState = {
  employees: [],
  deleteEmployee: {},
  loading: false,
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };
    case LOAD_EMPLOYEE:
      return {
        ...state,
        employees: action.data,
        loading: false,
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        ...state.employees.unshift(action.payload),
        loading: false,
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        ...state.employees.map((item) => {
          if (item._id === action.payload.id) {
            item.name = action.payload.name;
            item.gender = action.payload.gender;
            item.salary = action.payload.salary;
            item.dateOfBirth = action.payload.dateOfBirth;
          }
        }),

        loading: false,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        employees:state.employees.filter(item=> item._id !== action.payload),
        loading: false,
      };
    case NETWORK_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
