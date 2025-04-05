import React, { useState } from "react";

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const intialCount = 5;
    return intialCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleOne;
