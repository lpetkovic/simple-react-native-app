import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Locker extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>Welcome {this.props.username}</Text>
			</View>);
	}
}