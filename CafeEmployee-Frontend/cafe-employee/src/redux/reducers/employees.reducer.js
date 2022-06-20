import * as types from '../types/employee.types';


const initialState = {
    employees: [],
    loading: false,
    error: false
}

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.GET_EMPLOYEES_REQUEST_SUCCESS:
            return {
                ...state,
                employees: action.payload,
                loading: false
            };
        case types.GET_EMPLOYEES_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.ADD_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.ADD_EMPLOYEE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case types.ADD_EMPLOYEE_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.UPDATE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.UPDATE_EMPLOYEE_REQUEST_SUCCESS:
            return {
                ...state,
                employees: action.payload,
                loading: false
            };
        case types.UPDATE_EMPLOYEE_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.DELETE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.DELETE_EMPLOYEE_REQUEST_SUCCESS:
            let deletedItemIndex = state.employees.findIndex(c=>c.id === action.payload);
            let _employees = [...state.employees];
             _employees.splice(deletedItemIndex, 1);
            return {
                ...state,
                employees: _employees,
                loading: false
            };
        case types.DELETE_EMPLOYEE_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;

    }
}

export default employeesReducer;