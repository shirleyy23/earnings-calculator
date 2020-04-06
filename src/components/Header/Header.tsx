import React from 'react';
import { Typography } from '@material-ui/core';

interface Props {
	title: string;
}

const Header: React.FunctionComponent<Props> = (props) => {
	return (
		<header>
			<Typography component="h1" variant="h3" gutterBottom color="primary">
				{props.title}
			</Typography>
      ;
		</header>
	);
};

export default Header;
