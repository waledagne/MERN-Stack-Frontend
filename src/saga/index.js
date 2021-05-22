import { call, takeEvery, put } from "redux-saga/effects";
import {
  FETCH_EMPLOYEE,
  LOAD_EMPLOYEE,
  CREATE_EMPLOYEE,
  CREATE_SUCCESS,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_SUCCESS,
  DELETE_SUCCESS,
  NETWORK_ERROR,
} from "../actions/types";
import axios from "axios";

function* loadEmployeesAsync() {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:3000/api/employees/",

    );
     console.log(response);
    yield put({ type: LOAD_EMPLOYEE, data: response.data });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });
    console.log(e);
  }
}

function* createEmployeeAsync(data) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:3000/api/employees/",
              data.payload
    );

    yield put({ type: CREATE_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });

    console.log(e);
  }
}

function* editEmployeeAsync(data) {
  try {
    const response = yield call(
      axios.put,
      ` http://localhost:3000/api/employees/${data.payload._id}`,
      data.payload
    );

    console.log(response);

    yield put({ type: EDIT_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });
    console.log(e);
  }
}

function* deleteEmployeeAsync(data) {
  try {
    const response = yield call(
      axios.delete,
      ` http://localhost:3000/api/employees/${data.payload._id}`
    );

    yield put({ type: DELETE_SUCCESS, payload: data.payload._id });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });
    console.log(e);
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_EMPLOYEE, loadEmployeesAsync);
  yield takeEvery(CREATE_EMPLOYEE, createEmployeeAsync);
  yield takeEvery(EDIT_EMPLOYEE, editEmployeeAsync);
  yield takeEvery(DELETE_EMPLOYEE, deleteEmployeeAsync);
}

export default rootSaga;
