import { render, screen } from "@testing-library/react";
import HelloComponent from "./HelloComponent";

test("hello world renders correctly", () => {
  render(<HelloComponent />);
  const helloElement = screen.getByText(/hello world/i);
  expect(helloElement).toBeInTheDocument();
});
