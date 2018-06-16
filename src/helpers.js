import { homeUrl } from './views/urls';

export function isProductInCart(product, cart) {
	return cart.includes(product.id);
}

export const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const setDocumentTitle = locaction => {
 document.title = (locaction ? `${locaction}  –  ` : '') + 'Christmas Tree Shop';
}

export const goHome = (component) => {
		component.context.router.history.push(homeUrl);
		setDocumentTitle();
}