import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* <WelcomeMessage /> */}
      <JSXRules />
      <br />
      <Greeting />
      <br />
      <ProductInfo />
      <br />
      <UserList />
      <br />
      <ProductList />
    </div>
  );
}

export default App;
