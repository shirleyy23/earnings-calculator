import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Panel from './components/Panel/Panel';
import Chart from './components/Chart/Chart';
import GlobalProvider from './GlobalContext';

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

  const [data, setData] = useState({
    amount: 0,
    plan: 'select plan',
    monthlyEarnings: 0,
    yearlyEarnings: 0,
    updateData: (name: string, value: any) => {
      setData((data) => ({ ...data, [name]: value }));
    },
  });

  const calculateEarnings = (number: number, option: string): void => {
    const base = option === 'basic' ? 5 : 10;
    const commission =
      option === 'basic' ? number * base : number * base * 1.25;
    setData((data) => ({
      ...data,
      monthlyEarnings: commission,
      yearlyEarnings: commission * 12,
    }));
  };

  return (
    <GlobalProvider data={data}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Grid container component="main" className={classes.main}>
            <Grid
              item
              xs={12}
              md={4}
              className={`${classes.items} ${classes.formPanel}`}
            >
              <Header title="Calculate Earnings"></Header>
              <Form onSubmit={calculateEarnings} />
            </Grid>
            <Grid item xs={12} md={8} className={classes.items}>
              <Chart />
              <Panel />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
