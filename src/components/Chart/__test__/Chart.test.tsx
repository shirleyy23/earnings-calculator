import React from 'react';

import { render, cleanup } from '@testing-library/react';

import GlobalProvider from '../../../GlobalContext';

import Chart from '../Chart';

afterEach(cleanup);

const initialData = {
  amount: 0,
  plan: 'select plan',
  monthlyEarnings: 0,
  yearlyEarnings: 0,
  updateData: (): void => void 0,
};

test('Chart renders correctly', () => {
  const { getByTestId } = render(
    <GlobalProvider data={initialData}>
      <Chart />
    </GlobalProvider>
  );
  const chart = getByTestId('chart');
  expect(chart).toBeTruthy();
});
