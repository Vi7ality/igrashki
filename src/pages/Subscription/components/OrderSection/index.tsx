import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import ButtonPannel from "../ButtonPannel";
import OrderedToy from "../OrderedToy";
import { removeItemFromCart } from "../../../../redux/slices/cart.slice";
import { CartList, SectionStyled, SectionTitle, ToysCount } from "./OrderSection.styled";
import BagItem from "../../../Bag/components/BagItem";

type PropType = {
    clientValues: any,
    setIsAuthModalOpen: any
}

const OrderSection = ({clientValues, setIsAuthModalOpen}: PropType) => {
    const { cart } = useAppSelector((state) => state.cart);
    const { client } = useAppSelector((state) => state.client);
    const dispatch = useAppDispatch();
    const toysCount = cart.length;
    const [isEditing, setIsEditing] = useState(false);

      const handleDeleteItem = useCallback(
    (id: string) => {
      dispatch(removeItemFromCart(id));
    },
    [dispatch]
  );
    return (
        <SectionStyled>
            <SectionTitle>Замовлення</SectionTitle>
            <div>
              <ToysCount>Всього іграшок: <span>{toysCount}</span></ToysCount>
            <CartList>
              {cart.map((item) => (
                <BagItem
                  key={item.itemId}
                  itemImage={item.itemImage}
                  itemId={item.itemId}
                  itemName={item.itemName}
                  deleteItem={handleDeleteItem}
                />
              ))}
            </CartList>
            <ButtonPannel client={client} clientValues={clientValues} setIsAuthModalOpen={setIsAuthModalOpen} position="cart"/>
            </div>
        </SectionStyled>
    )
}

export default OrderSection;