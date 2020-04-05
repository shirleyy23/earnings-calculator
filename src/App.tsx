import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      height: '100vh',
    },
    items: {
      padding: theme.spacing(4),
    },
  })
);

const App: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Grid container component="main" className={classes.main}>
          <Grid item xs={12} md={4} className={classes.items}></Grid>
          <Grid item xs={12} md={8} className={classes.items}></Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default App;
