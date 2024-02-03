import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";

interface ILocationPoint {
  latitude: number;
  longitude: number;
  location?: string;
}

interface IMapProps {
  points: ILocationPoint[];
}

const mapCenterPosition = [49.01702615167241, 25.78615009518391] as LatLngTuple;

const Map = ({ points }: IMapProps) => {
  return (
    <MapContainer
      center={mapCenterPosition}
      zoom={7}
      //   scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {points.map(({ location, latitude, longitude }, index) => (
        <Marker key={index} position={[latitude, longitude]}>
          <Popup>
            <span>{location}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
