import React from "react";
import { TileLayer } from "react-leaflet";

const tileOptions = {
   cartoLight: {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
   },
   cartoDark: {
      url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
   },
   osm: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
   },
   esri: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution:
         "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS",
   },
};

const CustomTileLayer = ({ type = "cartoLight" }) => {
   const { url, attribution } = tileOptions[type] || tileOptions.cartoLight;

   return <TileLayer attribution={attribution} url={url} />;
};

export default CustomTileLayer;
