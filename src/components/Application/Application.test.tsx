import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("Renders Correctly", () => {
    render(<Application />); // step 1: Rednering
    const fNameElement = screen.getByRole("textbox", {
      name: "First Name:",
    }); // step 2: querying/getting element
    expect(fNameElement).toBeInTheDocument(); // step 3: Assertion

    const lNameElement = screen.getByRole("textbox", {
      name: "Last Name:",
    }); // step 2: querying/getting element
    expect(lNameElement).toBeInTheDocument(); // step 3: Assertion

    const heading1Element = screen.getByRole("heading", {
      level: 1,
      name: "Page Header",
    });
    expect(heading1Element).toBeInTheDocument();

    const heading2Element = screen.getByRole("heading", {
      level: 2,
      name: "Section Header",
    });
    expect(heading2Element).toBeInTheDocument();

    const genderElement = screen.getByRole("combobox");
    expect(genderElement).toBeInTheDocument();

    const interestsElement = screen.getByRole("checkbox");
    expect(interestsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });
});
