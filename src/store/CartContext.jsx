import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (items) => {},
  removeItem: (id) => {},
  clearItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedCartItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };

      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedCartItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedCartItems = [...state.items];
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      updatedCartItems.splice(existingCartItem, 1);
    } else {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }

    return { ...state, items: updatedCartItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearItem() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
