import { ChangeEvent, useMemo } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { IManager } from '../../../../models/manager';
import { LocationWrap,SelectWrapper, StyledSelect, TitleStyled } from './SelectLocation.styled';

type Props = {
  managementPoints: any;
  selectedCity: string;
  handleCitySelect(e: ChangeEvent<HTMLSelectElement>): void;
  handleChangeLocation(e: ChangeEvent<HTMLSelectElement>): void;
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

  return (
    <LocationWrap>
      <TitleStyled>Локація</TitleStyled>
      <SelectWrapper>
        {cities.length > 0 && (
          <StyledSelect value={selectedCity} onChange={handleCitySelect}>
            {cities.map((city: string) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </StyledSelect>
        )}

        {managementPointsByCity.length > 0 && (
          <select
            value={selectedManagementPoint?._id}
            onChange={e => handleChangeLocation(e)}
          >
            {managementPointsByCity.map(({ _id, location }: IManager) => (
              <option key={_id} value={_id}>
                {location}
              </option>
            ))}
          </select>
        )}
      </SelectWrapper>
    </LocationWrap>
  );
};

export default SelectLocation;
