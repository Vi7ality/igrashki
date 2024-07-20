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

const mapCenterPosition = [49.03855038750613, 31.45139858519458] as LatLngTuple;

const Map = ({ points }: IMapProps) => {
  return (
    <MapContainer
      center={mapCenterPosition}
      zoom={6}
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
