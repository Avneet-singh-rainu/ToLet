// NavLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/Footer";

const NavLayout = () => {
   return (
      <div>
         <nav>
            <Navbar />
         </nav>
         <main>
            <Outlet />
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
};

export default NavLayout;
