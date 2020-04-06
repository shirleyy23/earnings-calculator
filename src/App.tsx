import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    Palette: {
      primary: {
        main: string;
      };
      secondary: {
        secondary: {
          main: string;
        };
      };
    };
  }

  interface ThemeOptions {
    Palette?: {
      primary?: {
        main?: string;
      };
      secondary?: {
        main?: string;
      };
    };
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#038C8C',
    },
    secondary: {
      main: '#025E73',
    },
  },
});

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    main: {
      height: '100vh',
    },
    items: {
      padding: theme.spacing(4),
    },
    formPanel: {
      backgroundColor: theme.palette.grey[900],
    },
  })
);

const App: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Grid container component="main" className={classes.main}>
            <Grid
              item
              xs={12}
              md={4}
              className={(classes.items, classes.formPanel)}
            ></Grid>
            <Grid item xs={12} md={8} className={classes.items}></Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
