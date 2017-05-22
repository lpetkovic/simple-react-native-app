import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

export default class assignment extends Component {
	render() {
		return (
			<App></App>
		);
	}
}

AppRegistry.registerComponent('assignment', () => assignment);
