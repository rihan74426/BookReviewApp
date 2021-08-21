import React from "react"
import { StyleSheet, View, Text } from "react-native"

const ShowReview = props => {
	return (
		<View>
			<View style={Styles.review}>
				<Text style={Styles.name}>{`${props.name} says:`}</Text>
				<Text style={Styles.comment}>{props.comment}</Text>
			</View>
		</View>
	)
}

const Styles = StyleSheet.create({
	name: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 5,
	},
	comment: {
		padding: 5,
		fontSize: 16,
	},
	review: {
		borderWidth: 1,
		borderColor: "yellow",
		borderRadius: 5,
		marginTop: 10,
		width: "70%",
		marginLeft: 10,
	},
})

export default ShowReview
