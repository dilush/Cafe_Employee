import { call, put, takeEvery } from 'redux-saga/effects';
import { getApi, postApi, deleteApi, putApi } from '../helpers/api.helper';
import * as actions from '../actions/employees.action';
import * as types from "../types/employee.types";

const API_URL = process.env.REACT_APP_API_URL + '/Employee';

function* getEmployees(action) {
    let url = API_URL;
    if (action.payload) {
        url = `${url}?cafeId=${action.payload}`;
    }
    try {
        const employees = yield call(getApi, url);
        yield put(actions.getEmployeesSuccess(employees));
    }
    catch (e) {
        yield put(actions.getEmployeesFail(e.message));
    }
}

function* deleteEmployee(action) {
    const url = `${API_URL}/${action.payload}`;
    try {
        yield call(deleteApi, url);
        yield put(actions.deleteEmployeeSuccess(action.payload));
    }
    catch (e) {
        yield put(actions.deleteEmployeeFail(e.message));
    }
}

function* addEmployee(action) {
    try {
        yield call(postApi, API_URL, action.payload);
        yield put(actions.addEmployeeSuccess());
    }
    catch (e) {
        yield put(actions.addEmployeeFail(e.message));
    }
}

function* updateEmployee(action) {
    try {
        yield call(putApi, API_URL, action.payload);
        yield put(actions.updateEmployeeSuccess());
    }
    catch (e) {
        yield put(actions.updateEmployeeFail(e.message));
    }
}

function* employeeSaga() {
    yield takeEvery(types.GET_EMPLOYEES_REQUEST, getEmployees)
    yield takeEvery(types.DELETE_EMPLOYEE_REQUEST, deleteEmployee)
    yield takeEvery(types.ADD_EMPLOYEE_REQUEST, addEmployee)
    yield takeEvery(types.UPDATE_EMPLOYEE_REQUEST, updateEmployee)
}

export default employeeSaga;