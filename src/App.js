import './App.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './Components/LocationMarker';

function App() {
  const position = [23.725380014793473, 90.41183175368344];

  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <LocationMarker />
    </MapContainer>
  );
}

export default App;
