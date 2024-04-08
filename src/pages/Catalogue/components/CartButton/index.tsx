import { IToyInfo } from '../../../../models/toy';
import icons from '../../../../assets/icons.svg';
import { useAppSelector } from '../../../../redux/store';
import { ButtonStyled, CartIcon } from './CartButton.styled';

type Props = {
  handleToggleToCart(toy: IToyInfo): void;
  toy: IToyInfo;
};

const CartButton = ({ toy, handleToggleToCart}: Props) => {
  const { cart } = useAppSelector(state => state.cart);
  const isitemincart: boolean = cart.some(item => item.itemId === toy.toyId);
  return (
    <ButtonStyled type='button' onClick={() => handleToggleToCart(toy)} isitemincart={isitemincart}>
      <CartIcon>
        {!isitemincart ? (
          <use href={`${icons}#icon-cart-add`} />
        ) : (
          <use href={`${icons}#icon-cart-active`} />
        )}
      </CartIcon>
    </ButtonStyled>
  );
};

export default CartButton;
