import React from "react";
import { X } from "lucide-react";

const OpenNavBar = ({ toggleMenu }) => {
   const menuItems = [
      { name: "Home", link: "/" },
      { name: "LandLord", link: "/landlord" },
      { name: "Customer", link: "/customer" },
      { name: "Account", link: "/account" },
   ];

   return (
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[10000] p-5 transition-transform duration-300 ease-in-out">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold"></h2>
            <button
               onClick={toggleMenu}
               className="text-gray-500 hover:text-black"
            >
               <X />
            </button>
         </div>

         {/* Navigation Items */}
         <div className="h-full">
            <ul className="flex flex-col justify-center  items-center text-gray-700 transform translate-y-[200%]">
               {menuItems.map((item, index) => (
                  <li key={index}>
                     <a
                        href={item.link}
                        className="block py-2 px-4 text-2xl font-bold rounded hover:bg-gray-100 transition-colors duration-200"
                     >
                        {item.name}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default OpenNavBar;
