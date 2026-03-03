import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


const locations = [
  {
    name: "School A",
    description: "Football & Basketball clubs",
    coords: [47.9057, 106.8832],
  },
  {
    name: "School B",
    description: "Music & Art clubs",
    coords: [47.8750, 106.9200],
  },
  {
    name: "Community Center",
    description: "Chess & Science clubs",
    coords: [47.8950, 106.9500],
  },
];

export default function MapComponent() {
  return (
    <MapContainer
      center={[47.8864, 106.9057]}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, i) => (
        <Marker key={i} position={loc.coords}>
          <Popup>
            <strong>{loc.name}</strong><br />
            {loc.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}