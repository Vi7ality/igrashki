import BagItem from "../../../../shared/BagItem"
import { CartList, ToysCount } from "./OrderListStyled"
import { removeItemFromCart } from "../../../../redux/slices/cart.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useCallback} from "react";

const OrderList = () => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state) => state.cart);
    const toysCount = cart.length;

    const handleDeleteItem = useCallback(
        (id: string) => {
            dispatch(removeItemFromCart(id));
        }, [dispatch]);
          
    return (
     <>
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
            
        </>
    )
}

export default OrderList;