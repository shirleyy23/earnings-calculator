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
          label: 'Payment Period',
          data: [monthlyEarnings, yearlyEarnings],
          backgroundColor: [` ${monthlyColour}`, `${yearlyColour}`],
        },
      ],
    },
  };
  return (
    <Bar
      data={earnings.data}
      options={{
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
              },
              scaleLabel: {
                display: true,
                labelString: 'Earnings ($)',
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Payment Cycle',
              },
            },
          ],
        },
      }}
    ></Bar>
  );
};

export default Chart;
