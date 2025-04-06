import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>Click more</button>
    </div>
  );
};

export default Counter;
