import React from 'react';
import { Button } from '../styled/Button';

export default function(props) {
	return (
		<Button
		  corner
		  top
		  right
		  borderless
		  small
		  onClick={props.onClick}
		>
	    &times;
		</Button>
	)
}