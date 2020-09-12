import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

test('renders the header with the static content', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText("5 Day / 3 Hour Weather Forecast");
  expect(linkElement).toBeInTheDocument();
});
