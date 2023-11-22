import { render, screen } from '@testing-library/react';
import { ChakraProvider } from "@chakra-ui/react";
import Home from '../pages/home/Home';
import { getUserInfo } from '../services/githubServices'; ``

// Mock getUserData function
jest.mock('../services/githubServices', () => ({
    getUserInfo: jest.fn(),
}));

// Mock window.matchMedia
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

// Now TypeScript should recognize the mockResolvedValue function
(getUserInfo as jest.Mock).mockResolvedValue({
    // replace this with the actual data you expect the function to return
    username: 'testuser',
    name: 'Test User',
    avatar_url: 'https://example.com/avatar.jpg',
    public_repos: 10,
    followers: 20,
    following: 30,
});

describe('Home', () => {
    test('renders PromptUsername when no username is provided', () => {
        render(<ChakraProvider><Home username="" userExists={false} loading={false} /></ChakraProvider>);
        expect(screen.getByText(/Please enter a GitHub username/i)).toBeInTheDocument();
    });

    test('renders LoadingUser when loading is true', () => {
        render(<ChakraProvider><Home username="testuser" userExists={false} loading={true} /></ChakraProvider>);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('renders UserNotFound when user does not exist', () => {
        render(<ChakraProvider><Home username="testuser" userExists={false} loading={false} /></ChakraProvider>);
        expect(screen.getByText(/User not found/i)).toBeInTheDocument();
    });

    //todo: fix this test
    // test('renders UserContent when user exists', () => {
    //     render(<ChakraProvider><Home username="testuser" userExists={true} loading={false} /></ChakraProvider>);
    //     expect(screen.getByText(/testuser/i)).toBeInTheDocument();
    // });
});