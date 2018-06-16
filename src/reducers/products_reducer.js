import generateProducts from '../data/generateProducts';

export default function(state = generateProducts(30), action) {
	switch(action.type) {
		default:
			return state;
	}
}
