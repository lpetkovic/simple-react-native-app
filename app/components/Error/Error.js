import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export default Error = ({ ...props }) => {

	if (props.error) {
		return (<View><Text style={style.error}>{props.error}</Text></View>)
	}

	return null;
}