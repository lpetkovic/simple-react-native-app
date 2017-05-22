import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';

import { Locker } from './screens/index';
import { Login } from './screens/index';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userLoggedIn: false
		}
	}


	render() {
		return (
			<NativeRouter>
				<View style={{ paddingTop: 25, flex: 1, backgroundColor: 'crimson' }}>
					{this.state.userLoggedIn ? <Locker /> : <Login />}
					<Route exact path="/login" component={Login} />
					<Route exact path="/locker" component={Locker} />
				</View>
			</NativeRouter>
		)
	}
}
