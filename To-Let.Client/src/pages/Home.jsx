import React from "react";
import Navbar from "../components/Navbar";
import LiveMap from "../components/LiveMap";
import HomeRooms from "../components/HomeRooms";

// Home.jsx
const Home = () => {
   return (
      <div className="relative min-h-screen">
         <LiveMap />
         <Navbar />

         <HomeRooms />
      </div>
   );
};

export default Home;
