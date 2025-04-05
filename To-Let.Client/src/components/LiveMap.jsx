import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Custom icon for the marker
const customIcon = L.icon({
   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
   iconSize: [32, 32],
   iconAnchor: [16, 32],
   popupAnchor: [0, -32],
});

// Component to update map center dynamically
const RecenterMap = ({ position }) => {
   const map = useMap();
   useEffect(() => {
      map.setView(position);
   }, [position, map]);
   return null;
};

const LiveMap = () => {
   const [position, setPosition] = useState([30.727, 76.8442]);

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
      <div className="relative h-screen w-full">
         <MapContainer
            center={position}
            zoom={15}
            zoomControl={false}
            className="absolute top-0 h-[70vh] w-full"
         >
            <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
               <Popup>You are here</Popup>
            </Marker>
            <RecenterMap position={position} />
         </MapContainer>

         <button className="button-30 absolute top-[80vh] left-1/2 transform -translate-x-1/2 ">
            Near Me
         </button>
      </div>
   );
};

export default LiveMap;
