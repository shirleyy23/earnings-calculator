import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import Cards from '../Cards/Cards';

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
    <Grid container component="section" spacing={4} className={classes.panel}>
      <Cards title="monthly" />
      <Cards title="yearly" />
    </Grid>
  );
};

export default Panel;
