import React from "react"
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import HeadIcon from "../download.png"

const Card = props => {
	return (
		<TouchableHighlight onPress={props.onTouch}>
			<View style={styles.container}>
				<Image source={{ uri: `${props.image}` }} style={styles.image} />
				<View>
					<Text style={styles.title}>{props.title}</Text>
					<Text style={styles.subtitle}>Subtitle: {props.subtitle}</Text>
					<Text style={styles.author}>Author: {props.author}</Text>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		width: "100%",
		padding: 10,
		backgroundColor: "#eee",
		margin: 5,
		paddingEnd: 20,
	},
	image: {
		height: 75,
		width: 75,
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
		paddingHorizontal: 10,
		paddingVertical: 10,
		width: "80%",
	},
	author: {
		fontSize: 18,
		paddingStart: 10,
		width: "80%",
	},
	subtitle: {
		fontSize: 16,
		paddingStart: 10,
		width: "80%",
	},
})

export default Card
