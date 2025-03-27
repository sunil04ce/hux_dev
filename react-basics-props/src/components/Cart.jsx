import React from "react";

const Cart = () => {
  const items = ["Earbuds", "Power Bank", "SSD", "Hoddie"];
  return (
    <div>
      <h1>Cart Details</h1>
      {items.length > 0 && <p>You have {items.length} items in your cart.</p>}
      <ul>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
