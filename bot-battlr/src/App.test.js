import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bot Battlr heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Bot Battlr/i);
  expect(headingElement).toBeInTheDocument();
});
