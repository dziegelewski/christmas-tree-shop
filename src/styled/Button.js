import styled from 'styled-components';
import { flexCenter } from './styledUtils';
import { green } from './styledPalette';
import { Link } from 'react-router-dom';


export const Button = styled.button`
	width: 100%;
	border: 4px solid ${green};
	color: ${green};
	cursor: pointer;
	height: 40px;
	background: none;
	font-weight: 700;
	font-size: 1em;
	font-variant: small-caps;
	${flexCenter()};

	transition: all .2s;
	&:hover {
		${active()};
	}

	${props => props.active && (`
		${active()};
		cursor: default;
	`)}

	${props => props.sticky && (`
		position: sticky;
		bottom: 0px;
		background: white;
	`)}

	${props => props.borderless && (`
		border: none;
		width: auto;
		height: auto;
		display: inline-block;
	`)}

	${props => props.corner && ['top', 'bottom', 'left', 'right'].reduce((total, corner) => {

		if (props[corner]) {
			total += `${corner}: ${props.offset || '10px'};`
		}

		return total;
		
	}, '')}

	${props => props.small && (`
		position: absolute;
		width: auto;
		height: auto;
		font-size: 30px;
		line-height: 1;
	`)}

`;

function active() { return `
		color: white;
		background: ${green};
`}

export const ButtonLink = Button.withComponent(Link).extend`
	text-decoration: none;
`;