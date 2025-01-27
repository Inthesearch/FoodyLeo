import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const noOfTotalItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A resto pic" />
        <h1>Foody Panda</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({noOfTotalItems})
        </Button>
      </nav>
    </header>
  );
}
