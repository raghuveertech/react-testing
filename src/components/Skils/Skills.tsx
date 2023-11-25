import { useState } from "react";
import { skillsProps } from "./Skills.types";

const Skills = (props: skillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { skills } = props;

  return (
    <>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
