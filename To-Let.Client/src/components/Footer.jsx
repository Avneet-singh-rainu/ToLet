import React from "react";
import {
   Home,
   Search,
   Map,
   User,
   Mail,
   Phone,
   Instagram,
   Facebook,
   Twitter,
} from "lucide-react";
import { useNavigate } from "react-router";

const Footer = () => {
   const navigate = useNavigate();
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-gray-900 text-white pt-12 pb-6 mt-auto">
         {/* Main Footer Content */}
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Company Info */}
               <div>
                  <h3 className="text-xl font-bold mb-4">ToLet</h3>
                  <p className="text-gray-400 mb-4">
                     Find your perfect rental accommodation with ease. We
                     connect property owners with ideal tenants.
                  </p>
                  <div className="flex space-x-4 mt-4">
                     <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                     >
                        <Facebook className="w-5 h-5" />
                     </a>
                     <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                     >
                        <Instagram className="w-5 h-5" />
                     </a>
                     <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                     >
                        <Twitter className="w-5 h-5" />
                     </a>
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                     <li>
                        <button
                           onClick={() => navigate("/")}
                           className="text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                           <Home className="w-4 h-4 mr-2" />
                           Home
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => navigate("/search")}
                           className="text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                           <Search className="w-4 h-4 mr-2" />
                           Find Rooms
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => navigate("/map")}
                           className="text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                           <Map className="w-4 h-4 mr-2" />
                           Map View
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => navigate("/profile")}
                           className="text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                           <User className="w-4 h-4 mr-2" />
                           My Account
                        </button>
                     </li>
                  </ul>
               </div>

               {/* Popular Locations */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">
                     Popular Locations
                  </h3>
                  <ul className="space-y-2">
                     <li>
                        <button
                           onClick={() => navigate("/search?location=delhi")}
                           className="text-gray-400 hover:text-white transition-colors"
                        >
                           Delhi NCR
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => navigate("/search?location=mumbai")}
                           className="text-gray-400 hover:text-white transition-colors"
                        >
                           Mumbai
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() =>
                              navigate("/search?location=bangalore")
                           }
                           className="text-gray-400 hover:text-white transition-colors"
                        >
                           Bangalore
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() =>
                              navigate("/search?location=chandigarh")
                           }
                           className="text-gray-400 hover:text-white transition-colors"
                        >
                           Chandigarh
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() =>
                              navigate("/search?location=hyderabad")
                           }
                           className="text-gray-400 hover:text-white transition-colors"
                        >
                           Hyderabad
                        </button>
                     </li>
                  </ul>
               </div>

               {/* Contact */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <ul className="space-y-3">
                     <li className="flex items-start">
                        <Mail className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                        <span className="text-gray-400">support@tolet.com</span>
                     </li>
                     <li className="flex items-start">
                        <Phone className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                        <span className="text-gray-400">+91 123 456 7890</span>
                     </li>
                  </ul>
                  <div className="mt-6">
                     <button
                        onClick={() => navigate("/contact")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                     >
                        Contact Support
                     </button>
                  </div>
               </div>
            </div>

            {/* Mobile App Download */}
            <div className="border-t border-gray-800 mt-8 pt-8 pb-4">
               <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                     <h3 className="text-lg font-semibold mb-2">
                        Download Our App
                     </h3>
                     <p className="text-gray-400">
                        Find rooms on the go with our mobile app
                     </p>
                  </div>
                  <div className="flex space-x-4">
                     <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
                        <svg
                           className="w-6 h-6 mr-2"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.75 15.75C6.75 16.16 6.41 16.5 6 16.5C5.59 16.5 5.25 16.16 5.25 15.75V15.5C5.25 15.09 5.59 14.75 6 14.75C6.41 14.75 6.75 15.09 6.75 15.5V15.75ZM7.5 12C7.5 11.17 8.17 10.5 9 10.5H10.5V9C10.5 8.17 11.17 7.5 12 7.5C12.83 7.5 13.5 8.17 13.5 9V10.5H15C15.83 10.5 16.5 11.17 16.5 12C16.5 12.83 15.83 13.5 15 13.5H13.5V15C13.5 15.83 12.83 16.5 12 16.5C11.17 16.5 10.5 15.83 10.5 15V13.5H9C8.17 13.5 7.5 12.83 7.5 12Z"
                              fill="currentColor"
                           />
                        </svg>
                        Play Store
                     </button>
                     <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
                        <svg
                           className="w-6 h-6 mr-2"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M17.05 20.28C16.07 21.23 15.01 21.05 13.99 20.64C12.91 20.22 11.91 20.2 10.78 20.64C9.35 21.22 8.55 21 7.69 20.28C2.79 15.25 3.51 7.59 9.04 7.31C10.57 7.39 11.65 8.04 12.56 8.12C13.86 7.9 15.11 7.22 16.5 7.34C18.21 7.5 19.49 8.22 20.33 9.47C16.89 11.5 17.56 15.92 20.71 17.25C20.06 18.39 19.26 19.53 17.05 20.28ZM12.38 7.04C12.21 5.27 13.67 3.78 15.34 3.58C15.61 5.59 13.71 7.15 12.38 7.04Z"
                              fill="currentColor"
                           />
                        </svg>
                        App Store
                     </button>
                  </div>
               </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center">
               <p className="text-gray-500 text-sm">
                  © {currentYear} ToLet. All rights reserved.
               </p>
               <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                  <a href="#" className="hover:text-gray-400 transition-colors">
                     Privacy Policy
                  </a>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                     Terms & Conditions
                  </a>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                     Sitemap
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
