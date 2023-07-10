import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./action";
import cartItems from "./cart-items";

const initialState = {
  cart: cartItems,
  total: 200,
  amount: 66,
};

const reducer = (state = initialState, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    // return { ...state, cart: [] };
    console.log("decreased");
  }
  if (action.type === INCREASE) {
    // return { ...state, cart: [] };
    console.log("increased");
  }
  if (action.type === REMOVE) {
    // return { ...state, cart: [] };
    console.log("removed");
  }
  return state;
};
export default reducer;
