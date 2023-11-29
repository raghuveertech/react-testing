import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter2 from "./Counter2";

describe("Counter2", () => {
  test("Renders Correctly", () => {
    render(<Counter2 />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButtonElement).toBeInTheDocument();
    const amountField = screen.getByRole("textbox");
    expect(amountField).toBeInTheDocument();
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    expect(setButtonElement).toBeInTheDocument();
  });

  test("renders count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter2 />);
    const amountField = screen.getByRole("textbox");
    await user.type(amountField, "10");
    expect(amountField).toHaveValue("10");
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButtonElement);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("10");
  });

  test("tab working in order", async () => {
    render(<Counter2 />);
    const headingElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const inputField = screen.getByRole("textbox");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });

    await user.tab();
    expect(headingElement).toHaveFocus();
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(inputField).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
