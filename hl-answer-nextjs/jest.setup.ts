// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    }),
  ) as jest.Mock;