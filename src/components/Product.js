import React, { Component } from 'react';
import AddToCartButton from './AddToCartButton';
import Price from './Price';
import Title from '../styled/Title';
import Heading from '../styled/Heading';
import Image from '../styled/Image';
import { Columns, Column } from '../styled/Column';
import LinkItem from '../styled/LinkItem';
import { generateProductUrl } from '../views/urls';

class Product extends Component {

	render() {
		const { product } = this.props;


		if (this.props.fullpage) return (
			<div style={{
				padding: '20px',
			}} >

				<Heading>{product.name}</Heading>

				<Columns wrap={550}>

					<Column>
						<Image big src={product.image} />
					</Column>

					<Column stretched>
						<section>
							<Title>Price</Title>
							<p><Price>{product.price}</Price></p>
						</section>

						<section>
							<Title>Features</Title>
							<ul>
							{product.features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
							</ul>
						</section>


						{this.renderButton()}
					</Column>

				</Columns>

			</div>
		)

		return (
				<LinkItem to={generateProductUrl(product.id)}>
					<Title>{product.name}</Title>
					<p><Price>{product.price}</Price></p>

					<Image small src={product.image} />

					{this.renderButton()}
					
				</LinkItem>
			)
		}

		renderButton() {
			const displayButton = Boolean(this.props.onButtonClick);

			const { product, inCart } = this.props;
			const onButtonClick = (
				(e) => {
					e.preventDefault();
					e.stopPropagation();
					this.setState({ inCart: true });
					this.props.onButtonClick(product)
				}
			);

			if (!displayButton) return null;

			return (
				<AddToCartButton
					onClick={onButtonClick}
					inCart={inCart}
				/>
			);
		}
}

export default Product;