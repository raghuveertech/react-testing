import { useEffect, useState } from "react";
import { skillsProps } from "./Skills.types";

const Skills = (props: skillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { skills } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);

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
      <h1>Heading</h1>
      <input type={"text"} />
      <p id="loremElement">Lorem Ipsum</p>
    </>
  );
};

export default Skills;
