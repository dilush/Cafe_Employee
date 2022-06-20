import { call, put, takeEvery } from 'redux-saga/effects';
import { getApi, postApi, deleteApi, putApi } from '../helpers/api.helper';
import * as actions from '../actions/cafes.action';
import * as types from "../types/cafe.types";

const API_URL = process.env.REACT_APP_API_URL + '/Cafe';

function* getCafes() {
    try {
        const cafes = yield call(getApi, API_URL);
        yield put(actions.getCafesSuccess(cafes));
    }
    catch (e) {
        yield put(actions.getCafesFail(e.message));
    }
}

function* deleteCafe(action) {
    const url = `${API_URL}/${action.payload}`;
    try {
        yield call(deleteApi, url);
        yield put(actions.deleteCafeSuccess(action.payload));
    }
    catch (e) {
        yield put(actions.deleteCafeFail(e.message));
    }
}

function* addCafe(action) {
    try {
        yield call(postApi, API_URL, action.payload);
        yield put(actions.addCafeSuccess());
    }
    catch (e) {
        yield put(actions.addCafeFail(e.message));
    }
}

function* updateCafe(action) {
    try {
        yield call(putApi, API_URL, action.payload);
        yield put(actions.updateCafeSuccess());
    }
    catch (e) {
        yield put(actions.updateCafeFail(e.message));
    }
}

function* cafeSaga() {
    yield takeEvery(types.GET_CAFES_REQUEST, getCafes)
    yield takeEvery(types.DELETE_CAFE_REQUEST, deleteCafe)
    yield takeEvery(types.ADD_CAFE_REQUEST, addCafe)
    yield takeEvery(types.UPDATE_CAFE_REQUEST, updateCafe)
}

export default cafeSaga;