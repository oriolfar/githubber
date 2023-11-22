// Import necessary modules and functions
import axios from 'axios';
import { checkUserExists, getRepos, getUserInfo } from '../services/githubServices';

// Mock axios module
jest.mock('axios');

// Group tests related to GitHub services
describe('GitHub Services', () => {
  // Reset all mocks after each test
  afterEach(() => {
    jest.resetAllMocks();
  });

  // Test if checkUserExists returns true when user exists
  test('checkUserExists returns true when user exists', async () => {
    // Mock axios.get to resolve to an empty object
    (axios.get as jest.Mock).mockResolvedValue({});
    // Call checkUserExists and expect it to return true
    const result = await checkUserExists('testuser');
    expect(result).toBe(true);
  });

  // Test if checkUserExists returns false when user does not exist
  test('checkUserExists returns false when user does not exist', async () => {
    // Mock axios.get to reject with a 404 status
    (axios.get as jest.Mock).mockRejectedValue({ response: { status: 404 } });
    // Call checkUserExists and expect it to return false
    const result = await checkUserExists('testuser');
    expect(result).toBe(false);
  });

  // Test if getRepos fetches repositories when user exists
  test('getRepos fetches repositories when user exists', async () => {
    // Mock axios.get to resolve to an array of repos
    (axios.get as jest.Mock).mockResolvedValueOnce({}).mockResolvedValueOnce({ data: ['repo1', 'repo2'] });
    // Call getRepos and expect it to return the array of repos
    const result = await getRepos('testuser');
    expect(result).toEqual(['repo1', 'repo2']);
  });

  // Test if getUserInfo fetches user info when user exists
  test('getUserInfo fetches user info when user exists', async () => {
    // Mock axios.get to resolve to a user object
    (axios.get as jest.Mock).mockResolvedValueOnce({}).mockResolvedValueOnce({ data: { name: 'Test User' } });
    // Call getUserInfo and expect it to return the user object
    const result = await getUserInfo('testuser');
    expect(result).toEqual({ name: 'Test User' });
  });
});