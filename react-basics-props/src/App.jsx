import Card from "./components/Card";
import Cart from "./components/Cart";
import Person from "./components/Person";
import Product from "./components/Product";

const ValidPassword = () => <h1>Password is valid</h1>;
const InValidPassword = () => <h1>Password is invalid</h1>;

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InValidPassword />;
};

function App() {
  return (
    <div>
      <Card>
        <h1>My card</h1>
        <p>This is card content</p>
      </Card>
      <Cart />
      <Password isValid={false} />
      <br />
      <Person name="Jack" age={25} />
      <br />
      <Product name="Laptop" price={200} />
    </div>
  );
}

export default App;
