import { Link } from "react-router-dom";
import { useCallback } from "react";
import { removeItemFromCart } from "../../../../redux/slices/cart.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import BagItem from "../BagItem";
import { CalcText, CartList, FlexWrap, LinkAccent, LinkTrsp, ListWrap } from "./BagList.styled";

const BagList = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleDeleteItem = useCallback(
    (id: string) => {
      dispatch(removeItemFromCart(id));
    },
    [dispatch]
  );

  return (
    <ListWrap>
      <CartList>
        {cart.map((item) => (
          <BagItem
            key={item.itemId}
            itemId={item.itemId}
            itemImage={item.itemImage}
            itemName={item.itemName}
            deleteItem={handleDeleteItem}
          />
        ))}
      </CartList>
      <FlexWrap>
          <CalcText>Всього іграшок: <span>{cart.length}</span></CalcText>
          <LinkAccent to="/subscription">Оформити замовлення</LinkAccent>
          <LinkTrsp to="/catalogue">Повернутися до каталогу</LinkTrsp>
      </FlexWrap>
    </ListWrap>
  );
};

export default BagList;
