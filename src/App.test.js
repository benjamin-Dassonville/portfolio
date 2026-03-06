import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

// Mock IntersectionObserver which is missing in JSDOM
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};

test("renders VFG Auto title", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const titleElement = screen.getByText(/PLATFORME VFG AUTO/i);
  expect(titleElement).toBeInTheDocument();
});
