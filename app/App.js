import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { View, ActivityIndicator } from 'react-native';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import { Locker } from './screens/index';
import { Login } from './screens/index';

import { store } from './store/store';
import { checkLoginStatus, login, logout } from './store/actionCreators';


class _App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentWillMount() {
		this.props.checkLoginStatus(() => {
			// Avoid flash of login component before login is done
			this.setState({
				loading: false
			});
		});
	}

	createScreen = () => {
		if (this.state.loading) {
			return <ActivityIndicator color="#ffffff" />
		}

		return this.showFirstPage();
	}

	showFirstPage = () => {
		return this.props.userLoggedIn ? <Locker {...this.props} /> : <Login {...this.props} />;
	}

	render() {
		return (
			<NativeRouter>
				<View style={{ paddingTop: 25, flex: 1, backgroundColor: 'crimson' }}>
					{this.createScreen()}
					<Route exact path="/login" component={Login} />
					<Route exact path="/locker" component={Locker} />
				</View>
			</NativeRouter>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.username,
		userLoggedIn: state.userLoggedIn
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		checkLoginStatus: (cb) => {
			dispatch(checkLoginStatus(cb))
		},
		login: (data, cb) => {
			dispatch(login(data, cb))
		},
		logout: (cb) => {
			dispatch(logout(cb))
		}
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(_App);

export default class extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App {...this.props} />
			</Provider>
		)
	}
}
