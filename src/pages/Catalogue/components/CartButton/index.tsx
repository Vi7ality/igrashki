import { IToyInfo } from '../../../../models/toy';
import icons from '../../../../assets/icons.svg';
import { useAppSelector } from '../../../../redux/store';
import { ButtonStyled, CartIcon } from './CartButton.styled';

type Props = {
  handleAddToCart(toy: IToyInfo): void;
  toy: IToyInfo;
};

const CartButton = ({ toy, handleAddToCart }: Props) => {
  const { cart } = useAppSelector(state => state.cart);
  const isItemInCart = cart.some(item => item.itemId === toy.toyId);
  return (
    <ButtonStyled onClick={() => handleAddToCart(toy)} isItemInCart={isItemInCart}>
      <CartIcon>
        {!isItemInCart ? (
          <use href={`${icons}#icon-cart-add`} />
        ) : (
          <use href={`${icons}#icon-cart-active`} />
        )}
      </CartIcon>
    </ButtonStyled>
  );
};

export default CartButton;
