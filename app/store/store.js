import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { handleAuth } from './reducers.js';

export const store = createStore(
	handleAuth,
	applyMiddleware(thunkMiddleware)
);
