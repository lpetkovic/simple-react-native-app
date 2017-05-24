import React from 'react';
import { TextInput } from 'react-native';
import style from './style';

export default Input = ({ ...props }) => (
	<TextInput
		value={props.value}
		style={style.input}
		onChangeText={props.onChange}
		placeholder={props.placeholder}
		placeholderTextColor="#ffffff"
		autoCorrect={false}
		secureTextEntry={props.secureTextEntry || false}
		keyboardType="default" />
);