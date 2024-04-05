import { ChangeEvent, useMemo } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { IManager } from '../../../../models/manager';

type Props = {
  managementPoints: any;
  selectedCity: string;
  handleCitySelect(e: Event): void;
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
    <>
      <h2>Локація</h2>
      <div>
        {cities.length > 0 && (
          <select value={selectedCity} placeholder='Оберіть ваше місто' onChange={handleCitySelect}>
            {cities.map((city: string) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
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
      </div>
    </>
  );
};

export default SelectLocation;
