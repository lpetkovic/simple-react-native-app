import * as C from '../constants';

const initialState = {
	userLoggedIn: false,
	username: null,
	errors: {
		loginErr: null,
		logoutErr: null
	},
};

export const handleAuth = (state = initialState, action) => {
	switch (action.type) {
		case C.LOGIN_SUCCESS:
			return {
				userLoggedIn: true,
				username: action.username,
				errors: {
					...state.errors,
					loginErr: null
				}
			}
		case C.LOGIN_FAILURE: {
			return {
				...state,
				errors: {
					...state.errors,
					loginErr: action.errorMsg
				}
			}
		}
		case C.LOGOUT_SUCCESS: {
			return {
				userLoggedIn: false,
				username: null,
				errors: {
					...state.errors,
					logoutErr: null
				}
			}
		}
		case C.LOGOUT_FAILURE: {
			return {
				...state,
				errors: {
					...state.errors,
					logoutErr: action.errorMsg
				}
			}
		}
		default:
			return state;
	}
}