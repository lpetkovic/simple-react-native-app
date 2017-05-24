import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomButton, Input, Password } from '../../components/index';
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
				<Input
					value={this.state.username}
					onChange={(val) => this.setState({ username: val })}
					placeholder="Username"
				/>
				<Password
					value={this.state.password}
					onChange={(val) => this.setState({ password: val })}
					placeholder="Password"
				/>
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