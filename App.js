import { StatusBar } from "expo-status-bar"
import React from "react"
import { Image, View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { Home, Login } from "./App/Screens"
import { Provider } from "react-redux"
import Store from "./App/Store/Store"
import { navigationRef } from "./App/NavigationRoot"
import headIcon from "./App/download.png"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<Provider store={Store}>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator
					initialRouteName="Login"
					screenOptions={{
						headerTitleStyle: { fontWeight: "bold", color: "fff" },
						headerStyle: {
							backgroundColor: "#DA8C1F",
						},
					}}
				>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen
						name="Home"
						component={Home}
						options={{
							headerLeft: () => (
								<Image
									source={headIcon}
									style={{ width: 40, height: 40, marginRight: 20 }}
								/>
							),
							title: "Book Review App",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
