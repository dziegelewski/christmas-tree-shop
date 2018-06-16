import React from 'react';
import Currency from 'react-currency-formatter';

export default function(props) {
	const quantity = Math.round(props.children * 100) / 100;
	return (
		<Currency quantity={quantity} currency="PLN" />
	)
}