import * as types from "../types/cafe.types";

const initialState = {
    cafes: [
        {
            'Logo': 'aaa',
            'Name': 'aaa',
            'Description': 'aaa',
            'Employees': 'aaa',
            'Location': 'aaa'
        }
    ],
    loading: false,
    error: null
}

const cafesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CAFES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.GET_CAFES_REQUEST_SUCCESS:
            return {
                ...state,
                cafes: action.payload,
                loading: false
            };
        case types.GET_CAFES_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case types.ADD_CAFE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.ADD_CAFE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case types.ADD_CAFE_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case types.UPDATE_CAFE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.UPDATE_CAFE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case types.UPDATE_CAFE_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case types.DELETE_CAFE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.DELETE_CAFE_REQUEST_SUCCESS:
            let deletedItemIndex = state.cafes.findIndex(c => c.id === action.payload);
            let _cafes = [...state.cafes];
            _cafes.splice(deletedItemIndex, 1);
            return {
                ...state,
                cafes: _cafes,
                loading: false
            };
        case types.DELETE_CAFE_REQUEST_FAIL:
            return {
                ...state,
                error: action.cafes,
                loading: false
            };

        default:
            return state;

    }
}

export default cafesReducer;