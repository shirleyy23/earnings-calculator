import React from 'react';
import { Typography } from '@material-ui/core';

interface Props {
	title: string;
}

const Header: React.FunctionComponent<Props> = ({ title }) => {
	return (
		<header>
			<Typography
				data-testid="Header"
				component="h1"
				variant="h3"
				gutterBottom
				color="primary"
			>
				{title}
			</Typography>
		</header>
	);
};

export default Header;
