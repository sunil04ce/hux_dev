import React, { useState } from "react";

const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100);
    setRandomNumber(number);
  };

  return (
    <div>
      <p>Random Number : {randomNumber}</p>
      <button onClick={generateRandomNumber}>Generate New Number</button>
    </div>
  );
};

export default ExampleTwo;
