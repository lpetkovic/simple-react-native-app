import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import style from './style';

export default CustomButton = (props) => (
	<TouchableOpacity activeOpacity={0.5} disabled={props.disabled} onPress={props.onPress}>
		<View style={style.buttonHolder} width={props.width || 200}>
			<Text style={style.button}>{props.text}</Text>
			{props.loading ? <ActivityIndicator color="red" /> : null}
		</View>
	</TouchableOpacity >
);