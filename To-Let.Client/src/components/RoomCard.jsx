import React from "react";

const RoomCard = () => {
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
      },
   ];

   return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         {data.map((room) => (
            <div
               key={room.id}
               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
               <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-40 object-cover"
               />
               <div className="p-4">
                  <h2 className="text-lg font-semibold mb-1">{room.name}</h2>
                  <p className="text-gray-600 text-sm">{room.description}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default RoomCard;
