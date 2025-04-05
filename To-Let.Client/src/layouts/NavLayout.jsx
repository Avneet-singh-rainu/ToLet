// NavLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const NavLayout = () => {
   return (
      <div>
         <nav>
            <Navbar />
         </nav>
         <main>
            <Outlet />
         </main>
      </div>
   );
};

export default NavLayout;
