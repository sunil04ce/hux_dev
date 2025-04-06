import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  const handleSave = (event) => {
    event.preventDefault();
    setTodos([...todos, item]);
    setItem("");
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={handleSave}>
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
          placeholder="Enter to do item name"
        />
        <button type="submit">Save Todo</button>
      </form>
      <ul>
        {todos.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
