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

    const interestsElement = screen.getByRole("checkbox", {
      name: "Music",
    });
    expect(interestsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    const genderElement2 = screen.getByLabelText("Gender:");
    expect(genderElement2).toBeInTheDocument();

    const agreeTermsElement = screen.getByLabelText("I agree with terms");
    expect(agreeTermsElement).toBeInTheDocument();

    const firstNameElement = screen.getByPlaceholderText("First Name");
    expect(firstNameElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/all fields are mandatory/i);
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByDisplayValue(/john/i);
    expect(nameElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(/Image of a person/i);
    expect(imageElement).toBeInTheDocument();

    const closeElement = screen.getByTitle(/close/i);
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId(/custom-element/);
    expect(customElement).toBeInTheDocument();
  });
});
