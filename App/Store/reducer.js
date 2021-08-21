import * as actionTypes from "./actionTypes"

const INIT_STATE = {
	isAuth: false,
	token: null,
	books: [],
	review: [],
}

export const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case actionTypes.TRY_LOGIN:
			return {
				...state,
				token: action.payload,
				isAuth: true,
			}
		case actionTypes.LOAD_BOOKS:
			return {
				...state,
				books: action.payload,
			}
		case actionTypes.ADD_REVIEW:
			return {
				...state,
				review: [...state.review, action.payload],
			}
		default:
			return state
	}
}
