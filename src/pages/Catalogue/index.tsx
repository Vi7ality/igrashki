import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useEffect, useState } from 'react';
import { fetchToys } from '../../redux/slices/toys.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  addItemToCart,
  setSelectedManagementPoint,
} from '../../redux/slices/cart.slice';
import api from '../../api';
import { IManager } from '../../models/manager';
import { IToyInfo } from '../../models/toy';
import HeaderBackgound from '../../shared/HeaderBackground';
import Container from '../../shared/Container';
import { PageTitle, SectionStyled, ToyList } from './Catalogue.styled';
import SelectLocation from './components/SelectLocation';
import { nanoid } from 'nanoid';
import ToyItem from './components/ToyItem';

const Catalogue = () => {
  const { toys, isLoading: isToysLoading } = useAppSelector(
    state => state.toys
  );
  const { cart, selectedManagementPoint } = useAppSelector(state => state.cart);
  const [managementPoints, setManagementPoints] = useState([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPoints = async () => {
      const { data } = await api.get('/management/points');
      setManagementPoints(data);
      if (selectedManagementPoint) {
        setSelectedCity(selectedManagementPoint.city);
        dispatch(fetchToys(selectedManagementPoint));
      }    
    };
    fetchPoints();
  }, [dispatch, selectedManagementPoint]);

  // useEffect(() => {
  //   selectedManagementPoint && 
  // }, [dispatch,selectedManagementPoint]);

  const handleAddToCart = (toy: IToyInfo) => {
    const isItemInCart = cart.some(item => item.itemId === toy.toyId);
    if (toy && isItemInCart) {
      toast.warning('Іграшка вже додана в кошик!', { autoClose: 2000 });
      } else if (cart.length >= 3) {
        toast.error('Кошик повний. Максимальна кількість: 3 іграшки.', {
          autoClose: 1000,
        });
      } else {
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

  // const handleCitySelect = (e: ChangeEvent<HTMLSelectElement>) => {
  //   if (cart.length > 0) {
  //     toast.warning('Очистіть кошик перед зміною міста отримання!', {
  //       autoClose: 3000,
  //     });
  //     return;
  //   }

  //   setSelectedCity(e.target.value);
  //   const newManagementPoint = managementPoints.find(
  //     (point: IManager) => point.city === e.target.value
  //   )!;
  //   dispatch(setSelectedManagementPoint(newManagementPoint));
  // };

  const handleCitySelect = (value: string) => {
    if (cart.length > 0) {
      toast.warning('Очистіть кошик перед зміною міста отримання!', {
        autoClose: 3000,
      });
      return;
    }

    setSelectedCity(value);
    const newManagementPoint = managementPoints.find(
      (point: IManager) => point.city === value
    )!;
    dispatch(setSelectedManagementPoint(newManagementPoint));
  };

  const handleChangeLocation = (value: string) => {
    if (cart.length > 0) {
      toast.warning('Очистіть кошик перед вибором іншої локації!', {
        autoClose: 3000,
      });
      return;
    }
    dispatch(
      setSelectedManagementPoint(
        managementPoints.find((point: IManager) => point._id === value)!
      )
    );
  };
  // const handleChangeLocation = (e: ChangeEvent<HTMLSelectElement>) => {
  //   if (cart.length > 0) {
  //     toast.warning('Очистіть кошик перед вибором іншої локації!', {
  //       autoClose: 3000,
  //     });
  //     return;
  //   }
  //   dispatch(
  //     setSelectedManagementPoint(
  //       managementPoints.find(
  //         (point: IManager) => point._id === e.target.value
  //       )!
  //     )
  //   );
  // };

  // const cities = useMemo(
  //   () => [...new Set(managementPoints.map((point: IManager) => point.city))],
  //   [managementPoints]
  // );
  // const managementPointsByCity = useMemo(
  //   () =>
  //     managementPoints.filter((point: IManager) => point.city === selectedCity),
  //   [selectedCity, managementPoints]
  // );

  return (
    <>
      <HeaderBackgound />
      <SectionStyled>
        <Container>
          <div>
            <PageTitle>Каталог іграшок</PageTitle>
            <div>
              <SelectLocation
                managementPoints={managementPoints}
                selectedCity={selectedCity}
                handleCitySelect={handleCitySelect}
                handleChangeLocation={handleChangeLocation}
              />
              {isToysLoading ? (
                <p>Шукаємо іграшки на вибраній локації...</p>
              ) : (
                <ToyList>
                    {toys.map(toy => (
                      <ToyItem key={nanoid(6)} handleAddToCart={handleAddToCart} toy={toy} />
                  ))}
                </ToyList>
              )}
            </div>
          </div>
        </Container>
      </SectionStyled>

      <ToastContainer
        position="bottom-right"
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

export default Catalogue;
