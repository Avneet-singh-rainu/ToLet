import React from "react";
import RoomCard from "./RoomCard";

const HomeRooms = () => {
   // mimicking data from the backend
   // fetch this data from an API or a database.
   const data = [
      {
         id: 1,
         name: "Sunset Villa",
         description:
            "Spacious 2BHK near downtown. Fully furnished with modern amenities.",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
         price: 12000,
         address: "123 Maple Street, Delhi",
         isSharing: false,
         furnished: "furnished",
         rating: 4.8,
      },
      {
         id: 2,
         name: "Urban Nest",
         description: "Compact 1BHK ideal for working professionals.",
         image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
         price: 9000,
         address: "45 Tech Park Road, Bengaluru",
         isSharing: true,
         furnished: "semi furnished",
         rating: 4.2,
      },
      {
         id: 3,
         name: "Serene Stay",
         description: "Peaceful and cozy. 3BHK with garden view.",
         image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
         price: 15000,
         address: "78 Greenfield, Mumbai",
         isSharing: false,
         furnished: "furnished",
         rating: 4.9,
      },
      {
         id: 4,
         name: "Budget Pad",
         description: "Affordable and well-maintained PG near campus.",
         image: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
         price: 5000,
         address: "Near LPU Campus, Phagwara",
         isSharing: true,
         furnished: "non furnished",
         rating: 4.0,
      },
   ];

   return (
      <div className="home-rooms-container pt-[2vh] px-4">
         <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Available Rooms</h2>
            <button className="text-blue-600 font-medium text-sm">
               View All
            </button>
         </div>

         {/* based on selected filter i would send the data to the room card */}
         <RoomCard data={data} />
      </div>
   );
};

export default HomeRooms;
