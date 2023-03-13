import { render, screen } from '@testing-library/react';
import Home from './Components/Home';

test('renders learn react link', () => {
  render(<Home />);
  const showHome = screen.getByText(/This is the homepage/i);
  expect(showHome).toBeInTheDocument();
});
