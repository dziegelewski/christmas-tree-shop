export const welcomeUrl = '/';
export const homeUrl = '/shop';
export const cartUrl = homeUrl + '/cart';
export const productUrl = homeUrl + '/product/:id';
export const generateProductUrl = id => productUrl.replace(':id', id);

export const checkoutUrl = '/checkout';