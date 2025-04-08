import { Bath, Bed, Hotel, LandPlot, MapPin, Phone } from "lucide-react";
import React from "react";
import GalleryPhotos from "../components/GalleryPhotos";
import ImageSlider from "../components/ImageSlider";

const details = [
   {
      name: "Hotels",
      logo: <Hotel color="green" />,
   },
   {
      name: "4 Bedrooms",
      logo: <Bed color="green" />,
   },
   {
      name: "2 Bathrooms",
      logo: <Bath color="green" />,
   },
   {
      name: "4000 sqft",
      logo: <LandPlot color="green" />,
   },
];

const RoomDetailsPage = ({
   roomName = "Royale President Hotel",
   address = "79 Place de la Madeleine, Paris 75009, France",
}) => {
   return (
      <div className="overflow-x-hidden min-h-screen relative pb-56 ">
         <ImageSlider />
         <div className="px-4 mt-4 mb-8">
            <p className="text-3xl mb-3 font-semibold">{roomName}</p>
            <div className="flex items-center text-md gap-1">
               <MapPin size={18} color="green" />
               <p>{address}</p>
            </div>
         </div>
         <div className="px-4 py-2">
            <GalleryPhotos />
         </div>
         <div className="px-4 mt-8">
            <p className="text-xl font-semibold">Details</p>
            <div className="flex w-full justify-between mt-3">
               {details.map((item, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center justify-center"
                  >
                     <div>{item.logo}</div>
                     <div>{item.name}</div>
                  </div>
               ))}
            </div>
         </div>
         <div className="px-4 mt-8">
            <p className="text-xl mb-4 font-semibold">Description</p>
            <p className="text-lg">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
               nisi sem, sagittis sed dolor cursus, hendrerit viverra nulla.
               Etiam egestas libero scelerisque nibh tristique interdum.
               Praesent turpis nunc, porttitor sit amet sem at, luctus egestas
               nunc.
            </p>
         </div>

         <div className="fixed bottom-0 left-0 w-full py-3 px-4 bg-white shadow-lg ">
            <div className="flex justify-between items-center">
               <p className="text-xl font-medium text-green-600">
                  Rs. 5000<span className="text-sm text-black">/Month</span>
               </p>
               <button className="bg-green-500 hover:bg-green-600 rounded-full text-white font-semibold px-4 py-3 text-sm flex items-center gap-2">
                  <Phone size={18} />
                  Call Now!
               </button>
            </div>
         </div>
      </div>
   );
};

export default RoomDetailsPage;
