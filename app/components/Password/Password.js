import React from 'react';
import { Input } from '../index';

export default Password = ({ ...props }) => (
	<Input
		value={props.value}
		onChange={props.onChange}
		placeholder={props.placeholder}
		secureTextEntry={true} />
);