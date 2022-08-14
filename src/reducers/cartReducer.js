export const initialCartState = null;

export const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      return action.payload;
    }
    if (action.type === "REMOVE_FROM_CART") {
      return null;
    }
    return state;
};