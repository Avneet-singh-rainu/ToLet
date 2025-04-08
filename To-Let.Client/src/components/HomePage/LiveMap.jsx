import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import CustomTileLayer from "./CustomTileLayer";
const customIcon = L.icon({
   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
   iconSize: [32, 32],
   iconAnchor: [16, 32],
   popupAnchor: [0, -32],
});
const RecenterMap = ({ position }) => {
   const map = useMap();

   useEffect(() => {
      map.setView(position);
   }, [position, map]);

   return null;
};
const LiveMap = () => {
   const [position, setPosition] = useState([30.727, 76.8442]);

   // Get user's current location using Geolocation API
   // This effect will run once when the component mounts
   // and will set the position state to the user's current latitude and longitude
   // It also sets up a watch position to update the location in real-time
   useEffect(() => {
      if (navigator.geolocation) {
         const watchId = navigator.geolocation.watchPosition(
            (pos) => {
               const { latitude, longitude } = pos.coords;
               setPosition([latitude, longitude]);
            },
            (err) => console.error("Geolocation error:", err),
            { enableHighAccuracy: true }
         );

         return () => navigator.geolocation.clearWatch(watchId);
      }
   }, []);

   return (
      <div className="relative h-[70vh] w-full">
         <MapContainer
            center={position}
            zoom={15}
            zoomControl={false}
            className="absolute top-0 h-[65vh] w-full shadow-md"
         >
            {/* <TileLayer
               attribution='&copy; <a href="https://carto.com/">CARTO</a>'
               url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            /> */}
            {/* <TileLayer
               attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS"
               url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            /> */}

            <CustomTileLayer type="osm" />

            <Marker position={position} icon={customIcon}>
               <Popup className="font-medium">You are here</Popup>
            </Marker>
            <RecenterMap position={position} />
         </MapContainer>
      </div>
   );
};

export default LiveMap;
