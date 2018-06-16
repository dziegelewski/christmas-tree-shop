import { createSelector } from 'reselect'

const getProducts = (state) => state.products;

const getCart = (state) => state.cart;

export const getProductById = (state, id) => {
  return getProducts(state).find(product => product.id === parseInt(id, 10));
}

export const getProductsInCart = createSelector(
  [getProducts, getCart],
  (products, cart) => {
    return cart.map(cartId => {
      return products.find(product => product.id === cartId);
    });
  }
)

export const getNumberOfProductsInCart = createSelector(
  [getProductsInCart],
  productsInCart => productsInCart.length,
)

export const getTotalPrice = createSelector(
  [getProductsInCart],
  (productsInCart) => {
    return productsInCart.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }
)
