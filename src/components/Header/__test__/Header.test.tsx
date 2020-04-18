import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../Header';

afterEach(cleanup);

type HeaderProps = React.ComponentProps<typeof Header>;

function renderHeader(props: Partial<HeaderProps> = {}) {
  const defaultProps: HeaderProps = {
    title: 'Calculate Earnings',
  };
  return render(<Header {...defaultProps} {...props} />);
}

const testProps = {
  title: 'testStr',
};

const { title } = testProps;

test('header renders correctly', () => {
  const { getByTestId } = renderHeader(testProps);
  const header = getByTestId('Header');
  expect(header.tagName).toBe('H1');
  expect(header.textContent).toBe(title);
});
