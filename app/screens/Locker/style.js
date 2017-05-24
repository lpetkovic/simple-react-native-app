import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
	welcomeHolder: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		marginTop: 20
	},
	welcome: {
		fontSize: 14,
		color: '#ffffff',
		textAlign: 'left',
		flex: 1
	},
	listHolder: {
		flex: 1
	},
	list: {
		flex: 1,
		backgroundColor: '#ffffff',
		//marginTop: 20
	},
	listItem: {
		fontSize: 16,
		color: 'crimson',
		textAlign: 'center',
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ffffff'
	},
	logout: {

	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: "crimson",
		flex: 1
	}
})