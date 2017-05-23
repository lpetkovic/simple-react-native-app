import React from 'react';
import { Text, TouchableHighlight, ActivityIndicator, View } from 'react-native';
import styles from './styles';

export default CustomButton = ({ ...props }) => (
	<TouchableHighlight disabled={props.disabled} onPress={props.onPress}>
		<View style={styles.buttonHolder}>
			<Text style={styles.button}>{props.text}</Text>
			{props.loading ? <ActivityIndicator color="red" /> : null}
		</View>
	</TouchableHighlight>
);