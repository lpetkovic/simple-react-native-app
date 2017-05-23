import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { CustomButton } from '../../components/index';
import style from './style';
import list from './mockData'

export default class Locker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	logout = () => {
		this.setState({
			loading: true
		});

		this.props.logout(() => {
			this.setState({
				loading: false
			});
		});
	}

	render() {
		if (!this.props.userLoggedIn) {
			return (
				<Redirect to={{ pathname: '/login' }} />
			)
		}
		return (
			<View style={style.listHolder}>
				<View style={style.welcomeHolder}>
					<Text style={style.welcome}>Welcome {this.props.username}!</Text>
					<CustomButton
						onPress={this.logout}
						text="Log out"
						disabled={false}
						loading={this.state.loading}
					/>
				</View>
				<View style={style.list}>
					<FlatList
						ItemSeparatorComponent={() => <View style={style.separator} />}
						data={list}
						renderItem={({ item }) => <Text style={style.listItem}>{item}</Text>}
					/>
				</View>
			</View>
		);
	}
}