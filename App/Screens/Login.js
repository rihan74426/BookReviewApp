import React, { useEffect, useState } from "react"
import {
	View,
	Text,
	Button,
	ImageBackground,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from "react-native"
import { useNavigation } from "@react-navigation/core"
import { useIsFocused } from "@react-navigation/native"
import { connect } from "react-redux"
import { tryLogin } from "../Store/actionCreators"
import bgImg from "../bgImg.jpg"

const mapStateToProps = state => {
	return {
		isAuth: state.isAuth,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		tryAuth: (email, password, login) =>
			dispatch(tryLogin(email, password, login)),
	}
}

const Login = props => {
	const [authStates, setAuthStates] = useState({
		login: true,
		inputs: {
			email: "",
			password: "",
			confirmPasword: "",
		},
	})

	const isFocused = useIsFocused()

	useEffect(() => {
		setAuthStates({
			...authStates,
			inputs: {
				email: "",
				password: "",
				confirmPasword: "",
			},
		})
	}, [isFocused])

	const updateInputs = (value, name) => {
		setAuthStates({
			...authStates,
			inputs: {
				...authStates.inputs,
				[name]: value,
			},
		})
	}

	const handleAuth = () => {
		const email = authStates.inputs.email
		const password = authStates.inputs.password
		const confirmPassword = authStates.inputs.confirmPasword
		const emailReg =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (email != "" && password != "") {
			if (emailReg.test(email)) {
				if (authStates.login) {
					// tryAuth
					props.tryAuth(email, password, authStates.login)
				} else {
					if (password === confirmPassword) {
						// try AUTH
						props.tryAuth(email, password, authStates.login)
					} else {
						alert("Passwords doesn't matches!")
					}
				}
			} else {
				alert("Invalid Email!")
			}
		} else {
			alert("fields cannot be blank!")
		}
	}

	return (
		<ImageBackground style={{ width: "100%", flex: 1 }} source={bgImg}>
			<View style={styles.loginView}>
				<Text style={{ fontSize: 50, color: "white" }}>
					{authStates.login ? "Log In Here" : "Create account"}
				</Text>
				<TextInput
					value={authStates.inputs.email}
					placeholder="Enter Your Email"
					style={styles.input}
					onChangeText={val => updateInputs(val, "email")}
				/>
				<TextInput
					value={authStates.inputs.password}
					placeholder="Enter Your Password"
					style={styles.input}
					onChangeText={val => updateInputs(val, "password")}
				/>
				{!authStates.login && (
					<TextInput
						value={authStates.inputs.confirmPasword}
						placeholder="Confirm Your Password"
						style={styles.input}
						onChangeText={val => updateInputs(val, "confirmPasword")}
					/>
				)}
				<TouchableOpacity style={styles.btnCon} onPress={() => handleAuth()}>
					<Text style={styles.btn}>
						{authStates.login ? "Log In" : "Sign Up"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						setAuthStates({ ...authStates, login: !authStates.login })
					}
					style={{ marginTop: 10 }}
				>
					<Text style={styles.btn}>
						{authStates.login
							? "Don't have an account? Sign up"
							: "Already have an account? Log In"}
					</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	loginView: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		width: "80%",
		padding: 5,
		marginTop: 10,
		backgroundColor: "#DA8C1F",
		borderBottomWidth: 1,
		borderColor: "#fff",
		borderRadius: 5,
	},
	btn: {
		fontSize: 18,
		color: "#fff",
		alignSelf: "center",
	},
	btnCon: {
		flexDirection: "row",
		width: 150,
		paddingVertical: 5,
		backgroundColor: "blue",
		borderRadius: 5,
		marginTop: 10,
		justifyContent: "center",
		alignItems: "center",
	},
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
