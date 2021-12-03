import { render, screen, waitForElement } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import React from 'react';

test('renders without crashing', () => {
  render(<App />);
  const heading = screen.getByText(/your todo list/i);
  expect(heading).toBeInTheDocument();
});

// describe('<App /> tests', () => {
//   it("add button is pressed, it creates a new todo item", () => {
//     render(<App />);

//     // userEvent.type(screen.getByTestId("input-field"), "Create tests");
//     // expect(screen.getByTestId("input-field").value).toBe("Create tests");

//   });
// });