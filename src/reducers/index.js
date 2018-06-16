import { combineReducers } from 'redux';
import products from './products_reducer'
import cart from './cart_reducer'
import { reducer as form } from 'redux-form'

export default combineReducers({
	products,
	cart,
	form,
});
