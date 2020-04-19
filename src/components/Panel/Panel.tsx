import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import Cards from '../Cards/Cards';

import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel: {
      margin: '1rem 0',
    },
  })
);

const Panel = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      component="section"
      spacing={4}
      className={classes.panel}
      data-testid="panel"
    >
      <Cards title="monthly" color={green[400]} />
      <Cards title="yearly" color={green[800]} />
    </Grid>
  );
};

export default Panel;
