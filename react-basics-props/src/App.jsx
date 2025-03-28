import Card from "./components/Card";
import Cart from "./components/Cart";
import Greeting from "./components/Greeting";
import Person from "./components/Person";
import Product from "./components/Product";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

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
      <br />
      <Weather temperature={30} />
      <br />
      <UserStatus loggedIn={false} isAdmin={false} />
      <br />
      <Greeting timeOfDay={"afternoon"} />
    </div>
  );
}

export default App;
