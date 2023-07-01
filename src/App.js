import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "INCREASE") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  return state;
};
const store = createStore(reducer, initialState);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
