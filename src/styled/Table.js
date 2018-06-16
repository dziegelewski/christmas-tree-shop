import styled from 'styled-components';
import { lightGreen } from './styledPalette';

export default styled.table`
width: 100%;
border-collapse: collapse;
margin: 40px 0;

thead {
  font-weight: 600;
}

thead tr,
tr:nth-child(even) {
	background: ${lightGreen};
}

td {
	padding: 10px 5px;
}
`;
