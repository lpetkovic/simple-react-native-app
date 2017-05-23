import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Redirect } from 'react-router-native';
import style from './style';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			username: '',
			password: '',
			error: false
		}
	}

	login = () => {
		let { username, password } = this.state;
		if (!username || !password) {
			// Display error message
			// Set error state
			return;
		}

		this.props.login({
			username,
			password
		});

		this.setState({
			redirect: true
		});
	}

	render() {

		if (this.state.redirect) {
			return (
				<Redirect to={{ pathname: '/locker' }} />
			)
		}

		return (
			<View style={style.login}>
				<TextInput
					value={this.state.username}
					style={style.input}
					onChangeText={(val) => this.setState({ username: val })}
					placeholder="Username" />
				<TextInput
					value={this.state.password}
					style={style.input}
					onChangeText={(val) => this.setState({ password: val })}
					placeholder="Password" />
				<Button
					onPress={this.login}
					title="Log in"
					color="#ffffff"
					accessibilityLabel="Click here to log in"
				/>
			</View >
		)
	}
}