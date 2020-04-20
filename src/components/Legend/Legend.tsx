import React from 'react';

import ListItem from '@material-ui/core/ListItem';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  title: string;
  color: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      display: 'inline-block',
      marginRight: '1rem',
      fontSize: 12,
      color: '#666',
      width: 'auto',
    },
    legendIcon: {
      width: '10px',
      height: '10px',
      display: 'inline-block',
      marginRight: '.25rem',
      backgroundColor: (props: Props): string => props.color,
    },
  })
);

const Legend: React.FunctionComponent<Props> = (Props) => {
  const classes = useStyles(Props);
  const { title } = Props;
  return (
    <ListItem className={classes.listItem} data-testid={`legend-${title}`}>
      <span
        data-testid={`legend-icon-${title}`}
        className={classes.legendIcon}
      ></span>
      {title}
    </ListItem>
  );
};

export default Legend;
