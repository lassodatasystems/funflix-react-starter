import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const welcomeHeading = screen.getByText(/FunFlix/);
  expect(welcomeHeading).toBeInTheDocument();
});
