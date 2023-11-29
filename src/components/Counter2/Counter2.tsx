import React, { useState } from "react";

const Counter2 = () => {
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1 tabIndex={0}>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <input
        type={"text"}
        name="amount"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
      />
      <button onClick={() => setValue(amount)}>Set</button>
    </div>
  );
};

export default Counter2;
