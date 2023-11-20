/**
 *
 * Greet Component should render the text hello, and if a name is passed to that component, it should render hello followed by that name
 *
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet Component renders hello text correctly", () => {
  render(<Greet />);
  const greetElement = screen.getByText("Hello");
  expect(greetElement).toBeInTheDocument();
});

test("Greet component renders with name when prop is passed", () => {
  render(<Greet name={"Raghuveer"} />);
  const greetElementWithName = screen.getByText("Hello Raghuveer");
  expect(greetElementWithName).toBeInTheDocument();
});
