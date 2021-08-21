import * as actionTypes from "./actionTypes"
import { navigate } from "../NavigationRoot"

const authUser = token => {
	return {
		type: actionTypes.TRY_LOGIN,
		payload: token,
	}
}

export const resData = books => {
	return {
		type: actionTypes.LOAD_BOOKS,
		payload: books,
	}
}

export const addReview = review => {
	return {
		type: actionTypes.ADD_REVIEW,
		payload: review,
	}
}

export const tryLogin = (email, password, login) => dispatch => {
	let url = ""
	login
		? (url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=")
		: (url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=")
	const API_KEY = "AIzaSyD6qWpRa66BaImVoWvAqzSV5852wECnRCk"
	fetch(url + API_KEY, {
		method: "POST",
		body: JSON.stringify({
			email: email,
			password: password,
			returnSecureToken: true,
		}),
	})
		.catch(err => alert(login ? "Login failed!" : "Signup failed"))
		.then(res => res.json())
		.then(data => {
			data.error ? alert(data.error.message) : dispatch(authUser(data.idToken))
			navigate("Home")
		})
}
