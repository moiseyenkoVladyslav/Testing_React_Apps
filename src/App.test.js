import { render, screen } from "@testing-library/react";
import App from "./App";
import mockFetch from "./mocks/mockFetch";

test("renders the landing page", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  expect(screen.getByRole("img")).toBeInTheDocument();
   expect(await screen.findByRole("option", { name: "husky"})).toBeInTheDocument();
});

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});
