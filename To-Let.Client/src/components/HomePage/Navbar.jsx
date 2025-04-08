import React from "react";
import { Menu, ArrowLeft } from "lucide-react";
import OpenNavBar from "./OpenNavBar";
import { useNavigate, useParams } from "react-router";

const Navbar = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const params = window.location.pathname.split("/").slice(1);
   console.log("🚀 ~ Navbar ~ params:", params);

   const isSearchPage = params[0] === "search";
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };
   const navigate = useNavigate();
   const handleSearchClick = () => {
      navigate("/search");
   };

   // Close the menu when clicking outside of it
   React.useEffect(() => {
      const handleClickOutside = (event) => {
         if (isOpen && !event.target.closest(".nav-root")) {
            setIsOpen(false);
         }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
         document.removeEventListener("click", handleClickOutside);
      };
   });

   // if the menu is open, then show the open navbar and send the
   // toggle menu fuction to it so that it can close the menu when the user clicks on it

   if (isOpen) {
      return <OpenNavBar toggleMenu={toggleMenu} />;
   }

   // if the menu is not open, then show the normal navbar

   return (
      // Nav-Container
      <div className="nav-root px-3 absolute top-5 left-1/2 transform -translate-x-1/2 w-full z-[999] max-h-14 overflow-hidden">
         {/* items container */}
         <div className="flex justify-between bg-white rounded-full items-center text-black  px-4 py-1">
            {/* icon logo */}
            {isSearchPage ? (
               <div
                  className="cursor-pointer font-semibold"
                  onClick={() => navigate("/")}
               >
                  <ArrowLeft />
               </div>
            ) : (
               <div
                  className="cursor-pointer text-xl text-blue-600 font-bold"
                  onClick={() => navigate("/search")}
               >
                  <img
                     src="2let.jpg"
                     alt=""
                     className="object-cover h-[40px] transform scale-150 rounded-full"
                  />
               </div>
            )}

            {/* search box */}
            <div className="">
               <input
                  type="text"
                  onClick={handleSearchClick}
                  className="px-5 py-2 outline-none bg-gray-100 rounded-full ransition duration-300 "
                  placeholder="Search for locations..."
               />
            </div>

            {/* hamburger menu */}
            <div className="cursor-pointer" onClick={toggleMenu}>
               <Menu />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
