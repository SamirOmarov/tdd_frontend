import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const heading = screen.getByText(/your todo list/i);
  expect(heading).toBeInTheDocument();
});
