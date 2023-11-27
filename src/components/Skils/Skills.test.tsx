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

  test("Login Button rendered correctly", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButtonElement).toBeInTheDocument();
  });

  test("Start Learning Button does not render in the document", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start Learning Button eventually renders in the DOM", async () => {
    render(<Skills skills={skills} />);

    // screen
    //   .findByRole("button", {
    //     name: "Start Learning",
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     startLearningButton = response;
    //     expect(startLearningButton).toBeInTheDocument();
    //   });

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
