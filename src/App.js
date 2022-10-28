import './App.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  return (
    <MapContainer
      center={[23.725380014793473, 90.41183175368344]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[23.725380014793473, 90.41183175368344]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
