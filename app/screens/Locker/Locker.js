import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { CustomButton, Error } from '../../components/index';
import style from './style';

export default class Locker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	async componentDidMount() {

		if (this.props.policies.length === 0) {
			await this.props.getExistingPolicies();
		}
		await this.props.getPolicies(this.props.policies, this.props.lastUpdated);
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

	_keyExtractor = (item, index) => {
		return index;
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
						width={80}
						loading={this.state.loading}
					/>
				</View>

				<Error error={this.props.errors.policiesError} />
				<Error error={this.props.errors.logoutError} />

				<View style={style.list}>
					<FlatList
						ItemSeparatorComponent={() => <View style={style.separator} />}
						data={this.props.policies}
						renderItem={({ item }) => <Text style={style.listItem}>{item}</Text>}
						keyExtractor={this._keyExtractor}
					/>
				</View>
			</View>
		);
	}
}