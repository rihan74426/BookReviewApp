import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Card from "../components/Card"
import { connect } from "react-redux"
import BookDetail from "../components/BookDetail"
import { resData } from "../Store/actionCreators"

const mapStateToProps = state => {
	return {
		books: state.books,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		loadBooks: () => dispatch(loadBooks()),
		resData: books => dispatch(resData(books)),
	}
}

const Home = props => {
	const [selected, setSelected] = useState(null)

	const loadBooks = () => {
		let api = "https://www.googleapis.com/books/v1/volumes?q=quilting"
		fetch(api)
			.then(res => res.json())
			.then(Data => {
				props.resData(Data.items)
			})
			.catch(err => alert(err))
	}

	const onTouch = id => {
		const bookdetail = props.books.find(item => item.id === id)
		setSelected(bookdetail)
	}
	const modalClose = () => {
		setSelected(null)
	}
	useEffect(() => {
		loadBooks()
	}, [])

	return (
		<View style={styles.container}>
			{selected !== null && (
				<BookDetail selected={selected} modalClose={modalClose} />
			)}
			<FlatList
				style={styles.listStyle}
				data={props.books}
				renderItem={info => (
					<Card
						title={info.item.volumeInfo.title}
						subtitle={info.item.volumeInfo.subtitle}
						author={info.item.volumeInfo.authors}
						image={info.item.volumeInfo.imageLinks.thumbnail}
						onTouch={() => onTouch(info.item.id)}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#DA8C1F",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "column",
	},
	listStyle: {
		width: "100%",
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
