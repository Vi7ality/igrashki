import EmptyBag from "./components/EmptyBag";
import { useAppSelector } from "../../redux/store";
import HeaderBackgound from "../../shared/HeaderBackground";
import { FlexContainer, PageTitle } from "./Bag.styled";
import BagList from "./components/BagList";

const Bag = () => {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <>
      <HeaderBackgound />
      <FlexContainer>
         <PageTitle>Кошик</PageTitle>
      {cart.length === 0 ? (
        <EmptyBag />
      ) : (
        <BagList/>
      )}
      </FlexContainer>
    </>
  );
};

export default Bag;
