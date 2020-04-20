import React from 'react';

import { render, cleanup } from '@testing-library/react';

import Legend from '../Legend';

afterEach(cleanup);

type LegendProps = React.ComponentProps<typeof Legend>;

function renderLegend(props: Partial<LegendProps> = {}) {
  const defaultProps: LegendProps = {
    title: '',
    color: '',
  };
  return render(<Legend {...defaultProps} {...props} />);
}

describe('<Legend>', () => {
  test('legend value for monthly renders correctly', () => {
    const monthlyData = {
      title: 'Monthly',
      color: 'rgb(102, 187, 106)',
    };
    const { getByTestId } = renderLegend(monthlyData);
    const listItem = getByTestId('legend-Monthly');
    const listIcon = getByTestId('legend-icon-Monthly');

    expect(listItem.textContent).toBe('Monthly');
    expect(listIcon).toHaveStyle('background-color: rgb(102, 187, 106)');
  });

  test('legend value for yearly renders correctly', () => {
    const yearlyData = {
      title: 'Yearly',
      color: 'rgb(46, 125, 50)',
    };
    const { getByTestId } = renderLegend(yearlyData);
    const listItem = getByTestId('legend-Yearly');
    const listIcon = getByTestId('legend-icon-Yearly');

    expect(listItem.textContent).toBe('Yearly');
    expect(listIcon).toHaveStyle('background-color: rgb(46, 125, 50)');
  });
});
