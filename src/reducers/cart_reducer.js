import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	PURCHASE_CART
} from '../actions';

export default function(state = [], action) {
	switch (action.type) {

		case ADD_TO_CART:
			if (!state.includes(action.payload)) {
				return [...state, action.payload];
			}
			else {
				return state;
			}

		case REMOVE_FROM_CART:
			return state.filter(cartProductId => cartProductId !== action.payload)

		case PURCHASE_CART:
			return [];

		default:
			return state;
	}
}