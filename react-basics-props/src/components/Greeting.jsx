import React from "react";

const Greeting = ({ timeOfDay }) => {
  return (
    <div>
      {timeOfDay === "morning"
        ? "Good morning"
        : timeOfDay === "afternoon"
        ? "Good afternoon"
        : "Hello"}
    </div>
  );
};

export default Greeting;
