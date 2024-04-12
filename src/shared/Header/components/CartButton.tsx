import { useRef, useState } from 'react';
import CartModal from './CartModal';
import { useAppSelector } from '../../../redux/store';
import icons from '../../../assets/icons.svg';
import { BasketBtn } from '../Header.styled';
import useClickOutside from '../../../utils/useClickOutside';

const CartButton = () => {
  const { cart } = useAppSelector(state => state.cart);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const modalRef = useRef();
  useClickOutside(modalRef, () => {
    isCartModalVisible && setIsCartModalVisible(false);
  });

  return (
    <div>
      <BasketBtn onClick={() => setIsCartModalVisible(true)}>
        <svg>
          <use href={`${icons}#icon-basket`} />
        </svg>
        {cart.length !== 0 && <p>{cart.length}</p>}
      </BasketBtn>
      {isCartModalVisible && (
        <CartModal
          cart={cart}
          onClose={() => setIsCartModalVisible(false)}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

export default CartButton;
