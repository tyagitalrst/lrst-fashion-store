import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  selectCartOpen,
  selectTotalItem,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.slice";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const isCartOpen = useSelector(selectCartOpen);
  const totalItem = useSelector(selectTotalItem);

  const dispatch = useDispatch();

  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count">{totalItem}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
