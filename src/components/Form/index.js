import React, { useState } from "react"
import { Text, TextInput, View, TouchableOpacity } from "react-native"
import styles from "./style"

import ResultImc from "./ResultImc"

export default function Form() {
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
		setMessageImc("Informe o seu peso e a sua altura")
	}

	return (
		<View style={styles.formContext}>
			<View style={styles.form}>
				<Text style={styles.formLabel}>Altura</Text>
				<TextInput
					style={styles.input}
					onChangeText={setHeight}
					value={height}
					placeholder="Ex. 1.83"
					keyboardType="numeric"
					placeholderTextColor="#696969"
				></TextInput>
				<Text style={styles.formLabel}>Peso</Text>
				<TextInput
					style={styles.input}
					onChangeText={setWeight}
					value={weight}
					placeholder="Ex. 82"
					keyboardType="numeric"
					placeholderTextColor="#696969"
				></TextInput>
				<TouchableOpacity
					style={styles.buttonCalculator}
					onPress={() => validationImc()}
				>
					<Text style={styles.textButtonCalculator}>{titleButton}</Text>
				</TouchableOpacity>
			</View>
			<ResultImc messageResultImc={messageImc} resultImc={imc} />
		</View>
	)
}
