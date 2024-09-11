import { useParams } from 'react-router-dom';
import ImageSlider from '../../shared/ImageSlider';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchToy } from '../../redux/slices/toy.slice';
import { useEffect } from 'react';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../redux/slices/cart.slice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderBackgound from '../../shared/HeaderBackground';
import ToyInfo from './components/ToyInfo';
import { FlexContainer, SliderSection } from './Toy.styled';
import { Helmet } from 'react-helmet';

const Toy = () => {
  const { toyId } = useParams<{ toyId: string }>();
  const { toy } = useAppSelector(state => state.toy);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(state => state.cart);

  useEffect(() => {
    if (toyId) {
      dispatch(fetchToy(toyId));
    }
  }, [toyId, dispatch]);

  const handleToggleToCart = () => {
    const isItemInCart = cart.some(item => toy && item.itemId === toy.toyId);
    if (cart.length >= 3) {
      toast.error('Кошик повний. Максимальна кількість: 3 іграшки.', {
        autoClose: 1000,
      });
    } else if (toy && isItemInCart) {
      dispatch(removeItemFromCart(toy.toyId));
    } else {
      toy &&
        dispatch(
          addItemToCart({
            itemId: toy.toyId,
            itemName: toy.toyName,
            itemImage: toy.images[0],
          })
        );
      toast.success('Іграшку додано в кошик!', { autoClose: 1000 });
    }
  };

  return (
    <>
      <Helmet>
        <title>{toy?.toyName}</title>
        <meta
          name="description"
          content="Замовити іграшки для вашої дитини з Спільно Іграшки"
        />
      </Helmet>
      <HeaderBackgound />
      <FlexContainer>
        <SliderSection>
          <ImageSlider images={toy?.images} />
        </SliderSection>
        <ToyInfo handleToggleToCart={handleToggleToCart} />
      </FlexContainer>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        closeButton={false}
      />
    </>
  );
};

export default Toy;
