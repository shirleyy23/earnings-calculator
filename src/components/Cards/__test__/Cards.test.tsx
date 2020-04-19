import React from 'react';

import { render, cleanup, within } from '@testing-library/react';

import App from '../../../App';

import GlobalProvider from '../../../GlobalContext';

import Panel from '../../Panel/Panel';

afterEach(cleanup);

describe('<Cards>', () => {
  test('monthly card displays correctly on initial render', () => {
    const { getByTestId } = render(<App />);
    const { getByText } = within(getByTestId('earnings-card-monthly'));
    expect(getByText('Monthly Earnings')).toBeInTheDocument();
    expect(getByText('CA$0.00')).toBeInTheDocument();
    const icon = getByTestId('earnings-icon-monthly');
    expect(icon).toHaveStyle(`color: rgb(102, 187, 106)`);
  });

  test('yearly card displays correctly on initial render', () => {
    const { getByTestId } = render(<App />);
    const { getByText } = within(getByTestId('earnings-card-yearly'));
    expect(getByText('Yearly Earnings')).toBeInTheDocument();
    expect(getByText('CA$0.00')).toBeInTheDocument();
    const icon = getByTestId('earnings-icon-yearly');
    expect(icon).toHaveStyle(`color: rgb(46, 125, 50)`);
  });

  test('earnings is correctly calculated with valid amount and basic plan', () => {
    const data = {
      amount: 5,
      plan: 'basic',
      monthlyEarnings: 25,
      yearlyEarnings: 300,
      updateData: (): void => void 0,
    };

    const { getByTestId } = render(
      <GlobalProvider data={data}>
        <Panel />
      </GlobalProvider>
    );
    const { getByText } = within(getByTestId('panel'));
    expect(getByText('CA$25.00')).toBeInTheDocument();
    expect(getByText('CA$300.00')).toBeInTheDocument();
  });

  test('earnings is correctly calculated with valid amount and premium plan', () => {
    const data = {
      amount: 5,
      plan: 'premium',
      monthlyEarnings: 62.5,
      yearlyEarnings: 750,
      updateData: (): void => void 0,
    };

    const { getByTestId } = render(
      <GlobalProvider data={data}>
        <Panel />
      </GlobalProvider>
    );
    const { getByText } = within(getByTestId('panel'));
    expect(getByText('CA$62.50')).toBeInTheDocument();
    expect(getByText('CA$750.00')).toBeInTheDocument();
  });
});
