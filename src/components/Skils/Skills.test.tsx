import Skills from "./Skills";
import { render, screen } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript", "jQuery"];

  test("Renders Correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("List items rendered correctly", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});
