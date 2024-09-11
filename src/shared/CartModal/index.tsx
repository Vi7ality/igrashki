import { useAppDispatch } from '../../redux/store';
import { clearCart } from '../../redux/slices/cart.slice';

import {
  CartModalContainer,
  IconClose,
  ItemCounter,
  FlexWrap,
  CartList,
  CartItem,
  LinkBtnContainer,
  ClearBtn,
  BagLink,
  CatalogueLink,
  EmptyCartMsg,
} from './CartModal.styled';
import icons from '../../assets/icons.svg';
import { MutableRefObject } from 'react';

interface CartModalProps {
  cart: Array<{ itemId: string; itemName: string }>;
  onClose: () => void;
  modalRef: MutableRefObject<undefined>;
}

const CartModal = ({ cart, onClose, modalRef }: CartModalProps) => {
  const dispatch = useAppDispatch();
  const totalItems = cart.length;

  const getWordEnding = (quantity: number) => {
    return quantity === 1
      ? 'іграшка'
      : quantity >= 2 && quantity <= 4
      ? 'іграшки'
      : 'іграшок';
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <CartModalContainer ref={modalRef}>
      <FlexWrap>
        <ItemCounter>
          У кошику:<span>{totalItems}</span> {getWordEnding(totalItems)}
        </ItemCounter>
        <button onClick={onClose}>
          <IconClose>
            <use href={`${icons}#icon-close`} />
          </IconClose>
        </button>
      </FlexWrap>

      {cart.length > 0 ? (
        <>
          <CartList>
            {cart.map(item => (
              <CartItem
                to={`/toys/${item.itemId}`}
                onClick={onClose}
                key={item.itemId}
              >
                {item.itemName}
              </CartItem>
            ))}
          </CartList>
          <LinkBtnContainer>
            <ClearBtn onClick={handleClearCart}>Очистити</ClearBtn>{' '}
            <BagLink to={'/bag'} onClick={onClose}>
              Перейти до кошика
            </BagLink>
          </LinkBtnContainer>
        </>
      ) : (
        <EmptyCartMsg>
          Твій кошик порожній. <br /> Завітай до нашого{' '}
          <CatalogueLink to={'/catalogue'} onClick={onClose}>
            Каталогу іграшок
          </CatalogueLink>
          .
        </EmptyCartMsg>
      )}
    </CartModalContainer>
  );
};

export default CartModal;
