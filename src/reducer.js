import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./action";

const reducer = (state, action) => {
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
