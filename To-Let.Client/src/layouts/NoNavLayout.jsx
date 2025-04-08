// NoNavLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const NoNavLayout = () => {
   return (
      <div>
         <Outlet />
         <Footer />
      </div>
   );
};

export default NoNavLayout;
