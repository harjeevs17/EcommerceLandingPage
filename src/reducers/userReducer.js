export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  if (action.type === "CLEAR") {
    return null;
  }
  if (action.type === "ADD_TO_CART") {
    return { ...state, cart: [...state.cart, { ...action.payload }] };
  }
  if (action.type === "REMOVE_FROM_CART") {
    if (state != undefined) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.data._id !== action.payload),
      };
    }
  }
  return state;
};