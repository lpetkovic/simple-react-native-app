import React, { Component } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import { CustomButton } from '../../components/index';
import { Redirect } from 'react-router-native';
import style from './style';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			loading: false
		}
	}

	login = () => {
		let { username, password } = this.state;
		if (!username || !password) {
			return;
		}

		this.setState({ loading: true });
		this.props.login({ username, password }, () => {
			this.setState({ loading: false });
		});
	}

	render() {

		if (this.props.userLoggedIn) {
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
					placeholder="Username"
					placeholderTextColor="#ffffff"
					autoCorrect={false}
					keyboardType="default" />
				<TextInput
					value={this.state.password}
					style={style.input}
					onChangeText={(val) => this.setState({ password: val })}
					placeholder="Password"
					placeholderTextColor="#ffffff"
					autoCorrect={false}
					keyboardType="default"
					secureTextEntry={true} />
				<CustomButton
					onPress={this.login}
					disabled={!this.state.username || !this.state.password}
					text='Log in'
					loading={this.state.loading}
				/>
			</View>
		)
	}
}