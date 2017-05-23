import * as C from './constants';
import Storage from './storage'

const loginSuccess = username => ({
	type: C.LOGIN_SUCCESS,
	username,
});

const loginFailure = (errorMsg) => ({
	type: C.LOGIN_FAILURE,
	errorMsg
});

const logoutSuccess = () => ({
	type: C.LOGOUT_SUCCESS
});

const logoutFailure = (errorMsg) => ({
	type: C.LOGOUT_FAILURE,
	errorMsg
});

export const login = (data, cb) => {
	let { username, password } = data;

	return async function (dispatch) {
		try {
			await Storage.setItem(C.USER, username, cb);
			dispatch(loginSuccess(username));
		} catch (e) {
			dispatch(loginFailure(C.LOGIN_ERROR_MSG));
		}
	};
}

export const logout = (cb) => {
	return async function (dispatch) {
		try {
			await Storage.removeItem(C.USER, cb);
			dispatch(logoutSuccess());
		} catch (e) {
			dispatch(logoutFailure(C.LOGOUT_ERROR_MSG));
		}
	};
}

export const checkLoginStatus = (cb) => {
	return async function (dispatch) {
		try {
			let value = await Storage.getItem(C.USER, cb);
			let action = value ? loginSuccess : loginFailure;
			dispatch(action(value));
		} catch (e) {
			dispatch(loginFailure(null));
		}
	};
}