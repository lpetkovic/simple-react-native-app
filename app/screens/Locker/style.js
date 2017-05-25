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
		color: 'darksalmon',
		textAlign: 'left',
		flex: 1
	},
	listHolder: {
		flex: 1
	},
	list: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	error: {
		padding: 10,
		color: 'crimson',
		textAlign: "center",
	},
	listItem: {
		fontSize: 16,
		color: 'darksalmon',
		textAlign: 'center',
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ffffff'
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: "darksalmon",
		flex: 1
	}
})