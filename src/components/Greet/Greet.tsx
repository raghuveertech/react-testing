import { GreetProps } from "./Greet.types";

const Greet = (props: GreetProps) => {
  const { name } = props;
  return <div>Hello {name}</div>;
};

export default Greet;
