import React from 'react';
import { Button } from '../styled/Button';


export default function(props) {

	if (!props.inCart) {
		return (

			<Button onClick={props.onClick}>
				Add to cart
			</Button>

		)
	}
	else {
		return (

			<Button active>
				In your cart
			</Button>
		)

	}
}