import React, { useState } from "react"
import { Button, Text, TextInput, View, StyleSheet } from "react-native"

import ResultImc from "../ResultImc"

export default function Form(props) {
	const [height, setHeight] = useState(null)
	const [weight, setWeight] = useState(null)
	const [messageImc, setMessageImc] = useState("Informe o peso e altura")
	const [imc, setImc] = useState(null)
	const [titleButton, setTitleButton] = useState("Calcular")

	function imcCalculator() {
		return setImc((weight / (height * height)).toFixed(2))
	}

	function validationImc() {
		if (weight != null && height != null) {
			imcCalculator()
			setHeight(null)
			setWeight(null)
			setMessageImc("Seu IMC é: ")
			setTitleButton("Calcular Novamente")
			return
		}
		setImc(null)
		setTitleButton("Calcular")
		setMessageImc("Informe o peso e altura")
	}

	return (
		<View>
			<View>
				<Text style={styles.titles}>Altura</Text>
				<TextInput
					style={styles.placeholder}
					onChangeText={setHeight}
					value={height}
					placeholder="Ex. 1.83"
					keyboardType="numeric"
				></TextInput>
				<Text style={styles.titles}>Peso</Text>
				<TextInput
					style={styles.placeholder}
					onChangeText={setWeight}
					value={weight}
					placeholder="Ex. 82"
					keyboardType="numeric"
				></TextInput>
				<Button
					color="#4B0082"
					title={titleButton}
					onPress={() => validationImc()}
				/>
			</View>
			<ResultImc messageResultImc={messageImc} resultImc={imc} />
		</View>
	)
}

const styles = StyleSheet.create({
	titles: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#4B0082",
		paddingTop: 12,
	},
	placeholder: {
		paddingTop: 5,
		paddingBottom: 20,
	},
	result: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#4B0082",
		paddingTop: 12,
	},
})
