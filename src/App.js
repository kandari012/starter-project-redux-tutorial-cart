import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";
import reducer from "./reducer";
import { DECREASE, INCREASE } from "./action";

import { Provider } from "react-redux";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 66,
};

const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
