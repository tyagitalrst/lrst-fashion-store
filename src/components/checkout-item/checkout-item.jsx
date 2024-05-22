import { useDispatch } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.slice";

import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Arrow,
  Value,
  BaseSpan,
  Quantity,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const incrementItemHandler = () => dispatch(addItemToCart(cartItem));
  const decrementItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
