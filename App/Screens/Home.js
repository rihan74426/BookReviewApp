import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import Icon from "react-native-vector-icons/fontAwesome5"
const Home = () => {
	const renderNavbar = (
		<View
			style={{
				flexDirection: "row",
				height: 88,
				justifyContent: "space-between",
				alignItems: "flex-end",
				paddingHorizontal: 5,
				backgroundColor: "white",
			}}
		>
			<TouchableOpacity
				style={{ justifyContent: "center", width: 50 }}
				onPress={() => console.log("Back")}
			>
				<Icon name="arrow-left" size={30} color="black" />
			</TouchableOpacity>
			<TouchableOpacity
				style={{ justifyContent: "center", width: 50 }}
				onPress={() => console.log("Back")}
			>
				<Icon name="ellipsis-h" size={30} color="black" />
			</TouchableOpacity>
		</View>
	)

	const renderHeader = (
		<View
			style={{
				padding: 10,
				backgroundColor: "white",
			}}
		>
			<View>
				<Text style={{ color: "blue", fontSize: 20 }}>My Expenses</Text>
				<Text style={{ color: "gray", fontSize: 16 }}>Summary [private] </Text>
			</View>
			<View
				style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
			>
				<View
					style={{
						height: 50,
						width: 50,
						backgroundColor: "#D8D3D3",
						borderRadius: 25,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Icon name="calendar-week" size={30} color="black" />
				</View>
				<View>
					<Text>11 Aug, 2021</Text>
					<Text>18% more than last month</Text>
				</View>
			</View>
		</View>
	)

	return (
		<View style={{ flex: 1, backgroundColor: "gray" }}>
			{/* navbar renderer */}
			{renderNavbar}
			{/* header renderer */}
			{renderHeader}
		</View>
	)
}

export default Home
