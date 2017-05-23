import * as C from './constants';

const loginSuccess = username => ({
	type: C.LOGIN_SUCCESS,
	username,
});

export const login = (data) => {
	let { username, password } = data;

	return dispatch => {
		// Add login logic
		dispatch(loginSuccess(username));
	};
}

export const checkLoginStatus = () => {
	return dispatch => {
		// Add login logic
		dispatch(loginSuccess('test'));
	};
}