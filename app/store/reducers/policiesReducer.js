import * as C from '../constants';

const initialState = {
	policies: [],
	lastUpdated: 0,
	error: null
};

export const handlePolicies = (state = initialState, action) => {
	switch (action.type) {
		case C.FETCH_EXISTING_POLICIES:
			return {
				...state,
				policies: [...action.policies],
				lastUpdated: action.lastUpdated,
				error: null
			}
		case C.FETCH_POLICIES_SUCCESS:
			return {
				lastUpdated: action.lastUpdated,
				policies: [
					...state.policies,
					...action.policies
				],
				error: null
			}
		case C.FETCH_POLICIES_FAILURE: {
			return {
				...state,
				error: action.error,
			}
		}
		default:
			return state;
	}
}