import * as types from "../types/cafe.types"

export const getCafes = () => {
    return {
        type: types.GET_CAFES_REQUEST
    }
}

export const getCafesSuccess = (cafes) => {
    return {
        type: types.GET_CAFES_REQUEST_SUCCESS,
        payload: cafes
    }
}

export const getCafesFail = (error) => {
    return {
        type: types.GET_CAFES_REQUEST_FAIL,
        payload: error
    }
}

export const addCafe = (newCafe) => {
    return {
        type: types.ADD_CAFE_REQUEST,
        payload: newCafe
    }
}

export const addCafeSuccess = () => {
    return {
        type: types.ADD_CAFE_REQUEST_SUCCESS,
    }
}

export const addCafeFail = (error) => {
    return {
        type: types.ADD_CAFE_REQUEST_FAIL,
        payload: error
    }
}

export const updateCafe = (newCafe) => {
    return {
        type: types.UPDATE_CAFE_REQUEST,
        payload: newCafe
    }
}

export const updateCafeSuccess = () => {
    return {
        type: types.UPDATE_CAFE_REQUEST_SUCCESS,
    }
}

export const updateCafeFail = (error) => {
    return {
        type: types.UPDATE_CAFE_REQUEST_FAIL,
        payload: error
    }
}

export const deleteCafe = (cafeId) => {
    return {
        type: types.DELETE_CAFE_REQUEST,
        payload: cafeId
    }
}

export const deleteCafeSuccess = (deletedItemId) => {
    return {
        type: types.DELETE_CAFE_REQUEST_SUCCESS,
        payload: deletedItemId
    }
}

export const deleteCafeFail = (error) => {
    return {
        type: types.DELETE_CAFE_REQUEST_FAIL,
        payload: error
    }
}