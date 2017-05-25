import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { handleAuth } from './reducers/loginReducer';
import { handlePolicies } from './reducers/policiesReducer';

const rootReducer = combineReducers({
	handleAuth,
	handlePolicies
})

export const store = createStore(
	combineReducers({ handleAuth, handlePolicies }),
	applyMiddleware(thunkMiddleware)
);