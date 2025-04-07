import { useState } from "react";

import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import CopyInput from "./components/CopyInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo onClickHandler={() => setCount(count - 1)} />
      <br />
      <ExampleOne />
      <br />
      <ExampleTwo />
      <br />
      <ExampleThree />
      <br />
      <Counter />
      <br />
      <TodoList />
      <br />
      <Profile />
      <br />
      <ShoppingList />
      <br />
      <CopyInput />
    </section>
  );
}

export default App;
