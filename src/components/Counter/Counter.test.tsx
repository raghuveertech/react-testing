import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("Renders Correctly", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });
  test("renders a count of 0", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("0");
  });
  test("renders count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(buttonElement);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("1");
  });
  test("renders count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(buttonElement);
    await user.click(buttonElement);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("2");
  });

  // other pointer events include dblClick, tripleClick, hover, unhover
});
