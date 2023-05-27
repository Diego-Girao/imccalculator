import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function Title() {
	return (
		<View>
			<Text style={styles.title}>IMC-CALCULATOR 💪️</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		padding: 20,
		fontSize: 32,
		fontWeight: "bold",
		color: "#4B0082",
		backgroundColor: "#A9A9A9",
		borderRadius: 10,
	},
})
