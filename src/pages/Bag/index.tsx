import { Link } from "react-router-dom";
import BagItem from "./components/BagItem";
import EmptyBag from "./components/EmptyBag";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { removeItemFromCart } from "../../redux/slices/cart.slice";
import { useCallback } from "react";
import HeaderBackgound from "../../shared/HeaderBackground";
import { FlexContainer, PageTitle } from "./components/Bag.styled";

const Bag = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleDeleteItem = useCallback((id: string) => {
    dispatch(removeItemFromCart(id))
  }, [dispatch])

  return (
    <>
      <HeaderBackgound />
      <FlexContainer>
         <PageTitle>Кошик</PageTitle>
      {cart.length === 0 ? (
        <EmptyBag />
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <BagItem key={item.itemId} itemId={item.itemId} itemImage={item.itemImage} itemName={item.itemName} deleteItem={handleDeleteItem} />
            ))}
          </div>
          <div></div>
          <Link to="/catalogue">
            Повернутися до каталогу
          </Link>
          <Link to="/subscription">
            Оформити замовлення
          </Link>
        </>
      )}
      </FlexContainer>
    </>
  );
};

export default Bag;
