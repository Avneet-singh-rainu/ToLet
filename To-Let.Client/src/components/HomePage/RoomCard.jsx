// import React from "react";
// import { useNavigate } from "react-router";

// const RoomCard = () => {
//    const data = [
//       {
//          id: 1,
//          name: "Sunset Villa",
//          description:
//             "Spacious 2BHK near downtown. Fully furnished with modern amenities.",
//          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//          price: 12000,
//          address: "123 Maple Street, Delhi",
//          isSharing: false,
//          furnished: "furnished",
//       },
//       {
//          id: 2,
//          name: "Urban Nest",
//          description: "Compact 1BHK ideal for working professionals.",
//          image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
//          price: 9000,
//          address: "45 Tech Park Road, Bengaluru",
//          isSharing: true,
//          furnished: "semi furnished",
//       },
//       {
//          id: 3,
//          name: "Serene Stay",
//          description: "Peaceful and cozy. 3BHK with garden view.",
//          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//          price: 15000,
//          address: "78 Greenfield, Mumbai",
//          isSharing: false,
//          furnished: "furnished",
//       },
//       {
//          id: 4,
//          name: "Budget Pad",
//          description: "Affordable and well-maintained PG near campus.",
//          image: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
//          price: 5000,
//          address: "Near LPU Campus, Phagwara",
//          isSharing: true,
//          furnished: "non furnished",
//       },
//    ];
//    const navigate = useNavigate();

//    const handleClick = () => {
//       // Handle click event, e.g., navigate to room details page
//       console.log("Room card clicked!");
//       navigate("/room-details/1"); // Replace with actual route
//    };

//    return (
//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//          {data.map((room) => (
//             <div
//                key={room.id}
//                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//                onClick={handleClick}
//             >
//                <img
//                   src={room.image}
//                   alt={room.name}
//                   className="w-full h-40 object-cover"
//                />
//                <div className="p-4">
//                   <h2 className="text-lg font-semibold mb-1">{room.name}</h2>
//                   <p className="text-gray-600 text-sm">{room.description}</p>
//                </div>
//             </div>
//          ))}
//       </div>
//    );
// };

// export default RoomCard;

import React from "react";
import { useNavigate } from "react-router";
import { MapPin, Briefcase, Star } from "lucide-react";

const RoomCard = ({ data }) => {
   const navigate = useNavigate();

   const handleClick = (roomId) => {
      window.scrollTo(0, 0);
      navigate(`/room-details/${roomId}`);
   };

   const getFurnishingBadgeColor = (furnished) => {
      switch (furnished.toLowerCase()) {
         case "furnished":
            return "bg-green-100 text-green-800";
         case "semi furnished":
            return "bg-yellow-100 text-yellow-800";
         case "non furnished":
            return "bg-gray-100 text-gray-800";
         default:
            return "bg-blue-100 text-blue-800";
      }
   };

   return (
      <div className="pt-2 pb-20">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((room) => (
               <div
                  key={room.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => handleClick(room.id)}
               >
                  <div className="relative">
                     <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-48 object-cover"
                     />
                     <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                        {room.rating}
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h2 className="text-lg font-semibold text-white">
                           {room.name}
                        </h2>
                     </div>
                  </div>

                  <div className="p-4">
                     <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center text-gray-500 text-sm">
                           <MapPin className="w-4 h-4 mr-1" />
                           <span className="truncate max-w-xs">
                              {room.address}
                           </span>
                        </div>
                        <span className="text-green-700 font-bold">
                           ₹{room.price}
                        </span>
                     </div>

                     <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {room.description}
                     </p>

                     <div className="flex justify-between items-center">
                        <span
                           className={`text-xs px-2 py-1 rounded-full ${getFurnishingBadgeColor(
                              room.furnished
                           )}`}
                        >
                           {room.furnished}
                        </span>
                        {room.isSharing && (
                           <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 flex items-center">
                              <Briefcase className="w-3 h-3 mr-1" />
                              Sharing Available
                           </span>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default RoomCard;
