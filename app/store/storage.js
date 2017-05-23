import { AsyncStorage } from 'react-native';

export default class Storage {

	static getItem(key, cb) {
		return AsyncStorage.getItem(key, cb);
	}

	static setItem(key, value, cb) {
		return AsyncStorage.setItem(key, value, cb);
	}

	static removeItem(key, cb) {
		return AsyncStorage.removeItem(key, cb);
	}
} 