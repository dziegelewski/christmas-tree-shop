import Box from './Box'

export default Box.extend`
	margin: 10px auto;
	position: relative;
	max-height: 100%;
	overflow: auto;

	${({ small }) => small ? `
		padding: 30px;
		max-width: 350px;
	` : `
		width: 94%;
		max-width: 800px;
	`}
`;
