import {useMemo } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { IManager } from '../../../../models/manager';
import {
  LocationWrap,
  SelectWrapper,
  TitleStyled,
} from './SelectLocation.styled';
import CategorySelector from '../CategorySelector';

type Props = {
  managementPoints: any;
  selectedCity: string;
  handleCitySelect(v: string | unknown): void;
  handleChangeLocation(value: any): void;
};

const SelectLocation = ({
  managementPoints,
  selectedCity,
  handleCitySelect,
  handleChangeLocation,
}: Props) => {
  const { selectedManagementPoint } = useAppSelector(state => state.cart);

  const cities = useMemo(
    () => [...new Set(managementPoints.map((point: IManager) => point.city))],
    [managementPoints]
  );
  const managementPointsByCity = useMemo(
    () =>
      managementPoints.filter((point: IManager) => point.city === selectedCity),
    [selectedCity, managementPoints]
  );

  const locationList = managementPointsByCity.map((point: IManager) => point.location);


  return (
    <LocationWrap>
      <TitleStyled>Локація</TitleStyled>
      <SelectWrapper>
        <CategorySelector
          placeholderName="Оберіть ваше місто"
          selectedCategory={selectedCity}
          categories={cities}
          handleCategorySelect={handleCitySelect}
        />
        <CategorySelector
          placeholderName="Оберіть найближчу точку Спільно"
          selectedCategory={selectedManagementPoint?.location}
          categories={locationList}
          handleCategorySelect={handleChangeLocation}
        />
      </SelectWrapper>
    </LocationWrap>
  );
};

export default SelectLocation;
