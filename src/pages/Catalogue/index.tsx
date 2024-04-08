import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useCallback, useEffect, useState } from 'react';
import { fetchToys } from '../../redux/slices/toys.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  addItemToCart,
  removeItemFromCart,
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
import Filters from './components/Filters';

const Catalogue = () => {
  const { toys, isLoading: isToysLoading } = useAppSelector(
    state => state.toys
  );
  const { cart, selectedManagementPoint } = useAppSelector(state => state.cart);
  const [managementPoints, setManagementPoints] = useState([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [categories, setCategories] = useState(['Усі категорії']);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Усі категорії');
  const dispatch = useAppDispatch();

  const filteredToys =
    selectedCategory === 'Усі категорії'
      ? toys
      : toys.filter(toy => toy.category === selectedCategory);
  
    const setFilteredCategories = useCallback((dispatchedToys: IToyInfo[]) => {
        const toyCategories = dispatchedToys.map(
          (toy: IToyInfo) => toy.category
        );
        const filteredCategories = toyCategories.filter(
          (category: string, idx: number) =>
            toyCategories.indexOf(category) === idx
        );
        setCategories(['Усі категорії', ...filteredCategories]);
  }, [])
  
  useEffect(() => {
    const fetchPoints = async () => {
      const { data } = await api.get('/management/points');
      setManagementPoints(data);
      if (selectedManagementPoint) {
        setSelectedCity(selectedManagementPoint.city);
        const { payload: dispatchedToys } = await dispatch(
          fetchToys(selectedManagementPoint)
        );
        setFilteredCategories(dispatchedToys);
      }
    };
    fetchPoints();
  }, [dispatch, selectedManagementPoint, setFilteredCategories]);



  const handleToggleToCart = (toy: IToyInfo) => {
    const isItemInCart = cart.some(item => item.itemId === toy.toyId);
    if (cart.length >= 3) {
      toast.error('Кошик повний. Максимальна кількість: 3 іграшки.', {
        autoClose: 1000,
      });
    } else if (toy && isItemInCart) {
      dispatch(removeItemFromCart(toy.toyId));
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
    setSelectedCategory("Усі категорії");
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
              <Filters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                toysCount={filteredToys.length}
              />
              {isToysLoading ? (
                <p>Шукаємо іграшки на вибраній локації...</p>
              ) : (
                <ToyList>
                  {filteredToys.map(toy => (
                    <ToyItem
                      key={nanoid(6)}
                      handleToggleToCart={handleToggleToCart}
                      toy={toy}
                    />
                  ))}
                  {/* {toys.map(
                    toy =>
                      toy.category === selectedCategory && (
                        <ToyItem
                          key={nanoid(6)}
                          handleToggleToCart={handleToggleToCart}
                          toy={toy}
                        />
                      )
                  )} */}
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
