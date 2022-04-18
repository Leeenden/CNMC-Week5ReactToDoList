import { render, screen } from '@testing-library/react';
import App from './App';

test('to do list header is rendered', () => {
  render(<App />);
  const element = screen.getByText("to-do-list");
  expect(element).toBeInTheDocument();
});
