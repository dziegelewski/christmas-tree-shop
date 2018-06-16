import styled from 'styled-components';

export const Columns = styled.div`
	display: flex;
	flex-direction: column;

	${({ wrap }) => `
		@media (max-width: ${wrap}px) {
			text-align: center;
		}

		@media (min-width:  ${wrap - 1}px) {
			flex-direction: row;
		}
	
	`}


`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${props => props.stretched && (`
	flex: 1;
	`)}
`