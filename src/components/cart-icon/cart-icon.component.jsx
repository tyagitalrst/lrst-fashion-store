import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count">{totalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
