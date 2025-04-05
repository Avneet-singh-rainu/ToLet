import React from "react";
import { X } from "lucide-react";

const OpenNavBar = ({ toggleMenu }) => {
   return (
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[1000] p-5 transition-transform duration-300 ease-in-out">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
               onClick={toggleMenu}
               className="text-gray-500 hover:text-black"
            >
               <X />
            </button>
         </div>

         {/* Navigation Items */}
         <ul className="space-y-4 text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Listings</li>
            <li className="hover:text-blue-500 cursor-pointer">Favorites</li>
            <li className="hover:text-blue-500 cursor-pointer">Account</li>
         </ul>
      </div>
   );
};

export default OpenNavBar;
