import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectTotalItem = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((totalItem, item) => totalItem + item.quantity, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  )
);
