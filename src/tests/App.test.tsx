// Import libraries and components
import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

// Mock AppRouter component
jest.mock('../routes/AppRouter', () => () => <div>AppRouter component</div>);

// Test for App component
test('renders AppRouter component', () => {
  // Render App component
  render(<App />);

  // Find the mocked AppRouter component
  const routerElement = screen.getByText(/AppRouter component/i);

  // Check if AppRouter is in the document
  expect(routerElement).toBeInTheDocument();
});