import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };

  return (
    <div style={styles}>
      <h1>Profile Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        dolorum, vero neque nobis suscipit blanditiis dolore quod alias, odit
        tempore culpa optio iste impedit beatae rem rerum voluptatibus accusamus
        eaque.
      </p>
    </div>
  );
};

export default ProfileCard;
