import times from 'lodash/times';
import sample from 'lodash/sample';
import random from 'lodash/random';
import sampleSize from 'lodash/sampleSize';

const generateProducts = numberOfProducts => times(30, generateSingleProduct);

const generateSingleProduct = (id) => {
	return {
		id,
		name: randomName(adjectives),
		price: randomPrice(),
		image: randomImage(),
		features: createRandomFeatures(),
	}
};

function randomName(adjectives) {
	const randomAdjective = () => sample(adjectives);
	return `${randomAdjective()} ${randomAdjective()} Christmas Tree`;
}

function randomPrice() {
	return sample([
		19.90,
		29.90,
		49.90,
		99.90,
		199.90,
		299.90,
	]);
}

function randomImage() {
	const imageNumber = random(1,5)
	return require(`../images/tree${imageNumber}.png`);
}


const adjectives = ['Majestic', 'Big', 'Exotic', 'Giant', 'Tiny', 'Golden', 'Rich', 'Odd', 'Strange', 'Terrific', 'Fat', 'Hilarious', 'Bald', 'Angry', 'Notorious', 'Sleepy', 'Vintage', 'Brave', 'Modern', 'Magic', 'Cheap', 'Iron', 'Funny', 'Magnetic', 'Superb', 'Deadly', 'Sad', 'Muddy', 'Fantastic', 'Silver', 'Nice Smelling', 'Very Tall', 'Ancient', 'Bizzare', 'Rotary', 'Yugoslavian', 'Wild', 'Iced', 'Vivid', 'Elastic', 'Best Selling', 'Not So Expensive', 'Rare', 'Holy', 'Rough', 'Waterproof', 'Tremendous', 'Mind Blowing', 'Professional', 'Better Than You Think', 'Blessed', 'Secondhand', 'Rubber', 'Intensely Green', 'Fancy', 'Curve', 'Extraordinary', 'Rural', 'Ghost', 'Scandinavian', 'Sweet', 'Nostalgic', 'Family', 'Misantropic', 'Radioactive', 'Diabolic', 'Wasted', 'Nitro', 'Black And White', 'Syntetic'];

const featuresList = [
	'It was created out of love',
	'It will remind you of the special Christmas time',
	'You can have it at home all year round',
	'It expresses more than a thousand words',
	() => `Warranty: ${random(2, 10)} years`,
	() => `It is recommended by ${random(7, 10)} out of 10 experts`,
	'Your friends will go mad with jealousy!',
	() => `It will cost you as much as ${random(3, 300)} cups of coffee`,
	'Friendly for animals',
	'You won\'t be dissapointed',
	'It is one of our best selling products',
	'The delivery is completely free',
	'New on the market',
	'Best choice for everyone',
	'It smells of spruce',
	'A piece of forest in your home',
	'It will give you thrills',
	'Best quality',
	'The product is available only with us',
	() => `It has up to ${random(100 * 1000, 2000 * 1000)} needles`,
	() => `Safe for children from ${random(2, 13)} years`,
	() => `So far, ${random(300, 10 * 1000)} clients have chosen it`,
	'Resistant to fire (a little)',
	'Product appreciated abroad',
	'It shines in the dark',
];


const createRandomFeatures = () => {
	const getNumerOfFeatures = () => random(2, 4);
	const randomlySelectedFeatures = sampleSize(featuresList, getNumerOfFeatures());
	return [
		'It is a beautiful Christmas tree',
		...randomlySelectedFeatures.map(parseFeature)
	];
}

const parseFeature = feature => (typeof feature === 'function') ? feature() : feature;


export default generateProducts;