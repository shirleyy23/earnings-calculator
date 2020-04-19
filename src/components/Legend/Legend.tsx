import React from 'react';

import ListItem from '@material-ui/core/ListItem';

interface Props {
  title: string;
  color: string;
}

const Legend: React.FunctionComponent<Props> = (Props) => {
  const { title } = Props;
  return (
    <ListItem>
      <span></span>
      {title}
    </ListItem>
  );
};

export default Legend;
