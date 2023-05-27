import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function ResultImc(props) {
	return (
		<View>
			<Text style={styles.result}>{props.messageResultImc}</Text>
			<Text style={styles.number}>{props.resultImc}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	result: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#4B0082",
		paddingTop: 12,
	},
	number: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#4B0082",
		paddingTop: 12,
	},
})
