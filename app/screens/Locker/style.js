import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
	welcomeHolder: {
		flexDirection: 'column',
		alignItems: 'center'
	},
	welcome: {
		marginTop: 20,
		fontSize: 18,
		color: '#ffffff',
		textAlign: 'center',
		padding: 10,
	},
	listHolder: {
		flex: 1
	},
	list: {
		flex: 1,
		backgroundColor: '#ffffff',
		marginTop: 20
	},
	listItem: {
		fontSize: 16,
		color: 'crimson',
		textAlign: 'center',
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ffffff'
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: "crimson",
		flex: 1
	}
})