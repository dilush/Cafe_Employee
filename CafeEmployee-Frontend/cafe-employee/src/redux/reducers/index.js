import { combineReducers } from 'redux';
import cafesReducer from './cafes.reducer';
import employeesReducer from './employees.reducer';

const allReducers = combineReducers({
    cafesState: cafesReducer,
    employeesState: employeesReducer
});

export default allReducers;