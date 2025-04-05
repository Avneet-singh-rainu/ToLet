import React from "react";
import { Menu } from "lucide-react";
import OpenNavBar from "./OpenNavBar";

const Navbar = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const toggleMenu = () => {
      setIsOpen(!isOpen);
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
      <div className="nav-root px-3 absolute top-5 left-1/2 transform -translate-x-1/2 w-full z-[999] max-h-14">
         {/* items container */}
         <div className="flex justify-between bg-white rounded-full items-center text-black  px-4 py-1">
            {/* icon logo */}
            <div className="cursor-pointer font-semibold">ToLet</div>

            {/* search box */}
            <div className="">
               <input
                  type="text"
                  className="px-5 py-2 outline-none bg-transparent ransition duration-300"
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
