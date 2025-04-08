import React, { useState } from "react";
import { Home, Filter, TrendingUp, Star } from "lucide-react";

const HomeFilters = () => {
   const [activeFilter, setActiveFilter] = useState("nearby");

   return (
      <div className="flex flex-col gap-[4vh]">
         {/* Search filters */}
         <div className="flex justify-center px-4">
            <div className="bg-white rounded-full shadow-lg p-1 flex gap-2">
               <button
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition ${
                     activeFilter === "nearby"
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFilter("nearby")}
               >
                  <Home className="w-4 h-4" />
                  <span>Nearby</span>
               </button>
               <button
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition ${
                     activeFilter === "popular"
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFilter("popular")}
               >
                  <Star className="w-4 h-4" />
                  <span>Popular</span>
               </button>
               <button
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition ${
                     activeFilter === "trending"
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFilter("trending")}
               >
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending</span>
               </button>
               {/* Future use for custom filters
               <button
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition ${
                     activeFilter === "filters"
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFilter("filters")}
               >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
               </button> */}
            </div>
         </div>

         {/* Quick stats */}
         <div className="px-4">
            <div className="bg-white rounded-xl p-4 shadow-lg">
               <h2 className="text-lg font-semibold mb-3 flex items-center justify-between">
                  <span>Available near you</span>
                  <span>Search Radius 5 kms</span>
               </h2>

               <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                     <p className="text-2xl font-bold text-blue-600">12</p>
                     <p className="text-sm text-gray-600">Rooms</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                     <p className="text-2xl font-bold text-green-600">5</p>
                     <p className="text-sm text-gray-600">Apartments</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                     <p className="text-2xl font-bold text-purple-600">3</p>
                     <p className="text-sm text-gray-600">Flats</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Recent listings preview */}
         <div className="px-4 pb-4">
            <div className="flex justify-between items-center mb-2">
               <h2 className="text-lg font-semibold">Recent Listings</h2>
               <button className="text-blue-600 text-sm font-medium">
                  View All
               </button>
            </div>
            <div className="overflow-x-auto pb-4">
               <div className="flex gap-4 w-max pb-4">
                  {[1, 2, 3].map((item) => (
                     <div
                        key={item}
                        className="bg-white rounded-lg shadow-md w-64 flex-shrink-0"
                     >
                        <div className="h-24 bg-gray-200 rounded-t-lg">
                           <img
                              src="https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                              alt="Room"
                              className="w-full h-full object-cover rounded-t-lg"
                           />
                        </div>
                        <div className="p-3">
                           <div className="flex justify-between items-start">
                              <h3 className="font-medium">Single Room</h3>
                              <p className="text-green-600 font-bold">₹8,000</p>
                           </div>
                           <p className="text-gray-500 text-sm">
                              Sector 17, Chandigarh
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeFilters;
