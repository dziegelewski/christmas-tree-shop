export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PURCHASE_CART = 'PURCHASE_CART';

export function addToCart(productId) {
	return {
		type: ADD_TO_CART,
		payload: productId,
	};
}

export function removeFromCart(productId) {
	return {
		type: REMOVE_FROM_CART,
		payload: productId,
	};
}

export function purchaseCart() {
	return {
		type: PURCHASE_CART,
	};
}