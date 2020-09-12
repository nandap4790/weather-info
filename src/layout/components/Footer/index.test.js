import React from 'react';
import { render } from '@testing-library/react';

import Footer from '.';

test('renders the footer with the static content', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText("5 Day / 3 Hour Weather Forecast - Bangalore");
  expect(linkElement).toBeInTheDocument();
});
