import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers/index';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(allReducers);

sagaMiddleware.run(rootSaga);

export default store;