import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("Renders Correctly", () => {
    render(<Application />); // step 1: Rednering
    const inputElement = screen.getByRole("textbox"); // step 2: querying/getting element
    expect(inputElement).toBeInTheDocument(); // step 3: Assertion

    const genderElement = screen.getByRole("combobox");
    expect(genderElement).toBeInTheDocument();

    const interestsElement = screen.getByRole("checkbox");
    expect(interestsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });
});
