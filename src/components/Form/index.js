import React, { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"

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
				<Text>Altura</Text>
				<TextInput
					onChangeText={setHeight}
					value={height}
					placeholder="Ex. 1.83"
					keyboardType="numeric"
				></TextInput>
				<Text>Peso</Text>
				<TextInput
					onChangeText={setWeight}
					value={weight}
					placeholder="Ex. 82"
					keyboardType="numeric"
				></TextInput>
				<Button title={titleButton} onPress={() => validationImc()} />
			</View>
			<ResultImc messageResultImc={messageImc} resultImc={imc} />
		</View>
	)
}
