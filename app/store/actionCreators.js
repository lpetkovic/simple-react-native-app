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

const policiesSuccess = (policies, lastUpdated) => ({
	type: C.FETCH_POLICIES_SUCCESS,
	policies,
	lastUpdated
});

const policiesFailure = (policies, error) => ({
	type: C.FETCH_POLICIES_FAILURE,
	policies,
	error
});

const existingPolicies = (policies, lastUpdated) => ({
	type: C.FETCH_EXISTING_POLICIES,
	policies,
	lastUpdated
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

export const getExistingPolicies = () => {
	return async function (dispatch) {
		try {
			const lastUpdated = await Storage.getItem(C.LAST_UPDATED) || 0;
			const policiesRaw = await Storage.getItem(C.POLICIES);
			const policies = JSON.parse(policiesRaw);

			dispatch(existingPolicies(policies, lastUpdated));
		} catch (e) {
			dispatch(policiesFailure(C.POLICIES_ERROR));
		}
	};
}


export const getPolicies = (existingPolicies, lastUpdated) => {
	return async function (dispatch) {
		try {
			let newResultsRes = await fetch(`${C.BASE_URL}/get/policies/${lastUpdated}`);
			let newResults = await newResultsRes.json();

			let flattenPolicies = Object.keys(newResults.updatedPolicies).reduce((acc, item) => {
				return [...acc, ...newResults.updatedPolicies[item]]
			}, []);

			let mergePolicies = [
				...existingPolicies,
				...flattenPolicies
			]

			await Storage.setItem(C.LAST_UPDATED, JSON.stringify(newResults.lastUpdated));
			await Storage.setItem(C.POLICIES, JSON.stringify(mergePolicies));

			dispatch(policiesSuccess(flattenPolicies, newResults.lastUpdated));
		} catch (e) {
			dispatch(policiesFailure(C.POLICIES_ERROR));
		}
	}
}