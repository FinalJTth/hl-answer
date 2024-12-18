import { act, render, screen, waitFor } from '@testing-library/react';
import UserProfile from "./page";

import fetch from 'jest-fetch-mock';

fetch.enableMocks();

describe("UserProfile React Component", () => {
    const mockUser = { name: 'Test name', email: 'test@gmail.com' };
    
    afterEach(() => {
        fetch.resetMocks();
    });

    it("Loading State", async () => {
        act(() => render(<UserProfile userId={1} />));
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    })

    it('Successful state', async () => {
        fetch.mockResponseOnce(JSON.stringify(mockUser));

        act(() => render(<UserProfile userId={1} />));

        await waitFor(() => {
            expect(screen.getByText(/Test name/i)).toBeInTheDocument();
        });
        expect(screen.getByText(/email: test@gmail.com/i)).toBeInTheDocument();
    });

    it('Error : Failing fetch', async () => {
        fetchMock.mockRejectOnce(new Error('Failed to fetch user data'));

        act(() => render(<UserProfile userId={1} />));

        await waitFor(() => expect(screen.getByText('Error: Failed to fetch user data')).toBeInTheDocument());
    });

    it('Error : Timeout', async () => {
        jest.useFakeTimers();

        fetchMock.mockImplementationOnce(() =>
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 1000))
        );
    
        act(() => render(<UserProfile userId={1} />));

        act(() => {
            jest.advanceTimersByTime(2000); // Simulate retry delay
        });

        await waitFor(() => expect(screen.getByText('Error: Timeout')).toBeInTheDocument());

        jest.useRealTimers();
    });

    it('Check API endpoint call', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockUser));

        act(() => render(<UserProfile userId={1} />));

        await waitFor(() => expect(fetchMock).toHaveBeenCalledWith('https://localhost:4000/user/1'));
    });
})