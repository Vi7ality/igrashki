import EmptyBag from './components/EmptyBag';
import { useAppSelector } from '../../redux/store';
import HeaderBackgound from '../../shared/HeaderBackground';
import { FlexContainer, PageTitle } from './Bag.styled';
import BagList from './components/BagList';
import { Helmet } from 'react-helmet';

const Bag = () => {
  const { cart } = useAppSelector(state => state.cart);
  return (
    <>
      <Helmet>
        <title>{cart.length === 0 ? `Твій кошик порожній` : `У твоєму кошику ${cart.length} іграшок`}</title>
        <meta
          name="description"
          content="Замовити іграшки для вашої дитини з Спільно Іграшки"
        />
      </Helmet>
      <HeaderBackgound />
      <FlexContainer>
        <PageTitle>Кошик</PageTitle>
        {cart.length === 0 ? <EmptyBag /> : <BagList />}
      </FlexContainer>
    </>
  );
};

export default Bag;
