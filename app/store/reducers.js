import * as C from './constants';

const initialState = {
	userLoggedIn: false,
	username: ''
};

export function handleAuth(state = initialState, action) {
	switch (action.type) {
		case C.LOGIN_SUCCESS:
			return {
				userLoggedIn: true,
				username: action.username
			}
		case C.LOGOUT_SUCCESS:
			return {
				userLoggedIn: false,
				username: ''
			}
		default:
			return state;
	}
}