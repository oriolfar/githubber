// Import necessary dependencies
import { render, screen } from '@testing-library/react';
import UserNotFound from '../pages/home/UserNotFound';

jest.mock('axios');

describe('UserNotFound', () => {
    it('displays a not found message', () => {
        render(<UserNotFound />);

        const message = screen.getByText(/User not found, please enter a valid GitHub user/i);
        expect(message).toBeInTheDocument();
    });
});

// Add an empty export statement
export { };