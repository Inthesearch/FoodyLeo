import Cart from "./components/Cart";
import Header from "./components/header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header></Header>
        <Meals />
        <Cart />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
