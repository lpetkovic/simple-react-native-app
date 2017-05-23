import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import { Locker } from './screens/index';
import { Login } from './screens/index';

import { store } from './store/store';
import { checkLoginStatus, login } from './store/actionCreators';


class _App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.checkLoginStatus();
	}


	render() {
		return (
			<NativeRouter>
				<View style={{ paddingTop: 25, flex: 1, backgroundColor: 'crimson' }}>
					{this.props.userLoggedIn ?
						<Locker {...this.props} /> :
						<Login {...this.props} />
					}
					<Route exact path="/login" component={Login} />
					<Route exact path="/locker" component={Locker} />
				</View>
			</NativeRouter>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		username: state.username,
		userLoggedIn: state.userLoggedIn
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		checkLoginStatus: () => {
			dispatch(checkLoginStatus())
		},
		login: (data) => {
			dispatch(login(data))
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
