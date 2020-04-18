import React from 'react';

import { Bar } from 'react-chartjs-2';

import { GlobalState } from '../../GlobalContext';

import green from '@material-ui/core/colors/green';

const Chart = () => {
  const { data } = GlobalState();
  const { monthlyEarnings, yearlyEarnings } = data;
  const monthlyColour = green[400];
  const yearlyColour = green[800];
  const earnings = {
    data: {
      labels: ['Monthly', 'Yearly'],
      datasets: [
        {
          label: 'Earnings',
          data: [monthlyEarnings, yearlyEarnings],
          backgroundColor: [` ${monthlyColour}`, `${yearlyColour}`],
        },
      ],
    },
  };
  return <Bar data={earnings.data}></Bar>;
};

export default Chart;
