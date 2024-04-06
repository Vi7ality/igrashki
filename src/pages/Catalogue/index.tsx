import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
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
import { PageTitle, SectionStyled } from './Catalogue.styled';
import SelectLocation from './components/SelectLocation';

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

      dispatch(setSelectedManagementPoint(data[0]));
      setSelectedCity(data[0].city);
    };
    fetchPoints();
  }, [dispatch]);

  useEffect(() => {
    selectedManagementPoint && dispatch(fetchToys(selectedManagementPoint));
  }, [selectedManagementPoint]);

  const handleAddToCart = (toy: IToyInfo) => {
    if (toy) {
      const isItemInCart = cart.some(item => item.itemId === toy.toyId);
      if (isItemInCart) {
        toast.warning('Іграшка вже додана в кошик!', { autoClose: 1000 });
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
      (point: IManager) => point.city === value)!;
    dispatch(setSelectedManagementPoint(newManagementPoint));
  };

    const handleChangeLocation = (value) => {
    if (cart.length > 0) {
      toast.warning('Очистіть кошик перед вибором іншої локації!', {
        autoClose: 3000,
      });
      return;
    }
    dispatch(
      setSelectedManagementPoint(
        managementPoints.find(
          (point: IManager) => point._id === value
        )!
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
              <SelectLocation managementPoints={managementPoints} selectedCity={selectedCity} handleCitySelect={handleCitySelect} handleChangeLocation={handleChangeLocation} />
            {/* <aside>
              <div>
                <h3>Місто</h3>
                {cities.length > 0 && (
                  <select
                    value={selectedCity}
                    onChange={handleCitySelect}
                  >
                    {cities.map((city: string) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div>
                <h3>Локація</h3>
                {managementPointsByCity.length > 0 && (
                  <select
                    value={selectedManagementPoint?._id}
                    onChange={e => handleChangeLocation(e)}
                  >
                    {managementPointsByCity.map(
                      ({ _id, location }: IManager) => (
                        <option key={_id} value={_id}>
                          {location}
                        </option>
                      )
                    )}
                  </select>
                )}
              </div>
            </aside> */}
              {isToysLoading ? (
                <h1>Шукаємо іграшки на вибраній локації...</h1>
              ) : (
                <div>
                  {toys.map(toy => (
                    <div>
                      <Link
                        to={`/toys/${toy.toyId}`}
                      >
                        <img src={toy?.images[0]} alt="toy" />
                      </Link>
                      <h6>{toy.toyName}</h6>
                      <button
                        onClick={() => handleAddToCart(toy)}
                      >
                        Додати
                      </button>
                    </div>
                  ))}
                </div>
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
