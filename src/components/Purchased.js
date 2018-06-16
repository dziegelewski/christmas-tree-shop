import React from 'react';
import Space from '../styled/Space';
import Heading from '../styled/Heading';
import { ButtonLink } from '../styled/Button';
import { homeUrl } from '../views/urls';


export default function() {
	return (
		<Space>
			<Heading>Thank you!</Heading>

			<p>You purchased succesfully..</p>
			<p>Your products are on their way to you.</p>

			<ButtonLink to={homeUrl}>
				Awesome!
			</ButtonLink>

		</Space>
	)
}