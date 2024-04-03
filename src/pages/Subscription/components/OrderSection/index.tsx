import { useAppSelector } from "../../../../redux/store";
import ButtonPannel from "../ButtonPannel";
import EmptyOrder from "../EmptyOrder";
import OrderList from "../OrderList";
import { SectionStyled, SectionTitle } from "./OrderSection.styled";

type PropType = {
    clientValues: any,
    setIsAuthModalOpen: any
}

const OrderSection = ({clientValues, setIsAuthModalOpen}: PropType) => {
    const { cart } = useAppSelector((state) => state.cart);
    const toysCount = cart.length;
    return (
        <SectionStyled>
        <SectionTitle>Замовлення</SectionTitle>
        {toysCount === 0 ? <EmptyOrder/> :
          <OrderList/>
        }
            <ButtonPannel clientValues={clientValues} setIsAuthModalOpen={setIsAuthModalOpen} position="cart"/>
        </SectionStyled>
    )
}

export default OrderSection;