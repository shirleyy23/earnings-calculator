import React from 'react';

import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';

import UserEvent from '@testing-library/user-event';

import App from '../../../App';

afterEach(cleanup);

describe('<Form />', () => {
  test('form loads with the correct default values', () => {
    const { getByTestId } = render(<App />);
    const form = getByTestId('Form');
    expect(form).toBeTruthy();
    expect(form).toHaveFormValues({
      amount: 0,
      plan: 'select plan',
    });
  });

  test('users are able to change the value for the amount field', () => {
    const { getByTestId, queryByText } = render(<App />);
    const amount = getByTestId('amount') as HTMLInputElement;
    fireEvent.change(amount, { target: { value: 5 } });
    expect(amount.value).toBe('5');
    expect(queryByText('Please enter an amount')).toBeNull();
  });

  test('users are able to select a plan', async () => {
    const {
      getByTestId,
      getAllByRole,
      container,
      getByText,
      queryByText,
    } = render(<App />);
    const selectField = getByText('Select Plan') as HTMLDivElement;
    const planValue = getByTestId('plan') as HTMLInputElement;
    expect(selectField).not.toBeNull();
    expect(planValue).not.toBeNull();
    UserEvent.click(selectField);
    await waitForElement(() => getAllByRole('option')[1], { container });
    const itemClickable = getAllByRole('option')[1];
    UserEvent.click(itemClickable);
    expect(selectField).toHaveTextContent('Basic');
    expect(planValue.value).toBe('basic');
    expect(queryByText('Please select a plan')).toBeNull();
  });

  test('form submits with correct values', async () => {
    const {
      getByTestId,
      queryByText,
      getAllByRole,
      container,
      getByText,
    } = render(<App />);
    const form = getByTestId('Form') as HTMLFormElement;
    const button = getByTestId('submit-btn') as HTMLButtonElement;
    const amount = getByTestId('amount') as HTMLInputElement;
    const selectField = getByText('Select Plan') as HTMLDivElement;
    const planValue = getByTestId('plan') as HTMLInputElement;

    fireEvent.change(amount, { target: { value: 10 } });
    expect(amount.value).toBe('10');

    expect(selectField).not.toBeNull();
    expect(planValue).not.toBeNull();
    UserEvent.click(selectField);
    await waitForElement(() => getAllByRole('option')[2], { container });
    const itemClickable = getAllByRole('option')[2];
    UserEvent.click(itemClickable);
    expect(selectField).toHaveTextContent('Premium');
    expect(planValue.value).toBe('premium');

    fireEvent.click(button);

    fireEvent.submit(form, {
      target: { amount: { value: 10 }, plan: { value: 'premium' } },
    });
    expect(queryByText('Please select an amount')).toBeNull();
    expect(queryByText('Please select a plan')).toBeNull();
  });
});
