import React from 'react';

import { GlobalState } from '../../GlobalContext';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Grid, Card, CardContent, Typography } from '@material-ui/core';

import { grey } from '@material-ui/core/colors';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';

interface Props {
  title: string;
  color: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cards: {
      padding: '.5rem',
    },
    heading: {
      marginBottom: '.75rem',
      color: grey[800],
      letterSpacing: '-1px',
      fontWeight: 800,
    },
    icon: {
      marginLeft: '.5rem',
      fontSize: '1.75em',
      verticalAlign: 'middle',
      color: (props: Props): string => props.color,
    },
  })
);

const Cards: React.FunctionComponent<Props> = (Props) => {
  const { title } = Props;
  const { data } = GlobalState();
  const { monthlyEarnings, yearlyEarnings } = data;
  const classes = useStyles(Props);

  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const formatEarnings = (earnings: number): string => {
    return earnings.toLocaleString('en-US', {
      style: 'currency',
      currency: 'CAD',
    });
  };

  const userEarnings =
    title === 'monthly'
      ? formatEarnings(monthlyEarnings)
      : formatEarnings(yearlyEarnings);

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.cards} data-testid={`earnings-card-${title}`}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.heading}>
            {formattedTitle} Earnings
            <TrendingUpIcon
              data-testid={`earnings-icon-${title}`}
              className={`${classes.icon}`}
            />
          </Typography>
          <Typography variant="h4" component="p" color="primary">
            {userEarnings}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Cards;
