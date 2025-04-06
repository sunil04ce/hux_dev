import React, { useState } from "react";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingItem, setShoppingItem] = useState({ name: "", quantity: "" });

  const handleSave = (e) => {
    e.preventDefault();
    if (!shoppingItem.name || !shoppingItem.quantity) return;

    setShoppingList([...shoppingList, shoppingItem]);
    setShoppingItem({ name: "", quantity: "" });
  };

  return (
    <div>
      <h2>Shopping List</h2>

      <form action="" onSubmit={handleSave}>
        <input
          type="text"
          value={shoppingItem.name}
          name="name"
          placeholder="Enter item name"
          onChange={(event) =>
            setShoppingItem({ ...shoppingItem, name: event.target.value })
          }
        />
        <input
          type="number"
          value={shoppingItem.quantity}
          name="quantity"
          placeholder="Enter quantity"
          onChange={(event) =>
            setShoppingItem({
              ...shoppingItem,
              quantity: event.target.value,
            })
          }
        />
        <button type="submit">Save Item</button>
      </form>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
