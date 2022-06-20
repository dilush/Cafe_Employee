import * as types from '../types/employee.types';

export const getEmployees = (cafeId) => {
    return {
        type: types.GET_EMPLOYEES_REQUEST,
        payload: cafeId
    }
}

export const getEmployeesSuccess = (employees) => {
    return {
        type: types.GET_EMPLOYEES_REQUEST_SUCCESS,
        payload: employees
    }
}

export const getEmployeesFail = (error) => {
    return {
        type: types.GET_EMPLOYEES_REQUEST_FAIL,
        payload: error
    }
}

export const addEmployee = (newEmployee) => {
    return {
        type: types.ADD_EMPLOYEE_REQUEST,
        payload: newEmployee
    }
}

export const addEmployeeSuccess = () => {
    return {
        type: types.ADD_EMPLOYEE_REQUEST_SUCCESS,
    }
}

export const addEmployeeFail = (error) => {
    return {
        type: types.ADD_EMPLOYEE_REQUEST_FAIL,
        payload: error
    }
}

export const updateEmployee = (newEmployee) => {
    return {
        type: types.UPDATE_EMPLOYEE_REQUEST,
        payload: newEmployee
    }
}

export const updateEmployeeSuccess = () => {
    return {
        type: types.UPDATE_EMPLOYEE_REQUEST_SUCCESS,
    }
}

export const updateEmployeeFail = (error) => {
    return {
        type: types.UPDATE_EMPLOYEE_REQUEST_FAIL,
        payload: error
    }
}

export const deleteEmployee = (employeeId) => {
    return {
        type: types.DELETE_EMPLOYEE_REQUEST,
        payload: employeeId
    }
}

export const deleteEmployeeSuccess = (deletedItemId) => {
    return {
        type: types.DELETE_EMPLOYEE_REQUEST_SUCCESS,
        payload: deletedItemId
    }
}

export const deleteEmployeeFail = (error) => {
    return {
        type: types.DELETE_EMPLOYEE_REQUEST_FAIL,
        payload: error
    }
}