import React from "react";
import Navbar from "../components/HomePage/Navbar";
import LiveMap from "../components/HomePage/LiveMap";
import HomeRooms from "../components/HomePage/HomeRooms";
import HomeFilters from "../components/HomePage/HomeFilters";

// Home.jsx
const Home = () => {
   return (
      <div className="relative min-h-screen">
         <div className="">
            <Navbar />
            <LiveMap />
         </div>
         <HomeFilters />
         <HomeRooms />
      </div>
   );
};

export default Home;
