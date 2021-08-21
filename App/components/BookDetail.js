import React, { useState } from "react"
import { connect } from "react-redux"
import { addReview } from "../Store/actionCreators"
import {
	Text,
	View,
	Image,
	Modal,
	StyleSheet,
	Linking,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
	FlatList,
} from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { get } from "react-native/Libraries/Utilities/PixelRatio"
import ShowReview from "./ShowReview"

const mapStateToProps = state => {
	return {
		showReview: state.review,
	}
}

const mapDispatchToProps = () => dispatch => {
	return {
		addReview: review => dispatch(addReview(review)),
	}
}

const BookDetail = props => {
	const [review, setReview] = useState({
		name: "",
		comment: "",
	})
	const submit = () => {
		if (review.name != "" && review.comment != "") {
			props.addReview(review)
		} else {
			alert("Plz! fill all the fields.")
		}
		setReview({ name: "", comment: "" })
	}

	return (
		<Modal
			onRequestClose={props.modalClose}
			animationType="slide"
			style={{ flex: 1 }}
		>
			<View style={Styles.container}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View>
						<Image
							style={Styles.image}
							source={{
								uri: props.selected.volumeInfo.imageLinks.thumbnail,
							}}
						/>
						<ScrollView
							scrollToOverflowEnabled={true}
							showsHorizontalScrollIndicator={true}
							onScroll={window.scrollY}
						>
							<View>
								<Text style={Styles.title}>
									{props.selected.volumeInfo.title}
								</Text>
								<Text style={Styles.author}>
									Author : {props.selected.volumeInfo.authors}
								</Text>
								<Text style={Styles.author}>
									Subtitle : {props.selected.volumeInfo.subtitle}
								</Text>
								<Text style={Styles.author}>
									Publisher : {props.selected.volumeInfo.publisher}
								</Text>
								<Text style={Styles.author}>
									Published Date : {props.selected.volumeInfo.publishedDate}
								</Text>
								<Text style={Styles.author}>
									Description : {props.selected.volumeInfo.description}
								</Text>
								<Text
									style={Styles.author}
									onPress={() =>
										Linking.openURL(props.selected.volumeInfo.previewLink)
									}
								>
									Link : Click here...
								</Text>

								<Text
									style={(Styles.author, { textAlign: "center", fontSize: 20 })}
								>
									Reviews
								</Text>
								<FlatList
									data={props.showReview}
									renderItem={({ item }) => (
										<ShowReview
											name={item.name}
											comment={item.comment}
											text={item.name}
										/>
									)}
									keyExtractor={item => item.name}
								/>
								<TextInput
									style={Styles.input}
									placeholder="Your Name..."
									value={review.name}
									onChangeText={text => setReview({ ...review, name: text })}
									keyboardType="default"
								/>
								<TextInput
									style={Styles.input}
									placeholder="Your Review..."
									value={review.comment}
									onChangeText={text => setReview({ ...review, comment: text })}
								/>
								<TouchableOpacity style={Styles.btnCon} onPress={submit}>
									<Text style={Styles.btn}>Submit</Text>
								</TouchableOpacity>
							</View>
						</ScrollView>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</Modal>
	)
}

const Styles = StyleSheet.create({
	container: {
		padding: 5,
	},
	image: {
		width: "100%",
		height: "30%",
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		marginTop: 10,
	},
	author: {
		fontSize: 18,
		marginTop: 5,
		width: "100%",
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
		backgroundColor: "orange",
		borderRadius: 5,
		marginTop: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: "80%",
		padding: 5,
		marginTop: 10,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderColor: "orange",
		borderRadius: 5,
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
