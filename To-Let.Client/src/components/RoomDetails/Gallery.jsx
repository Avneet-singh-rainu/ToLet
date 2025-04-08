import React, { useState } from 'react';
import { ArrowLeft, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
const Gallery = () => {
    const navigate = useNavigate();
    // Gallery images from Pexels
    const galleryImages = [
        {
            id: 1,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Hotel building exterior
            alt: "Hotel Building Exterior",
            category: "Exterior"
        },
        {
            id: 2,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Hotel reception area
            alt: "Hotel Reception",
            category: "Interior"
        },
        {
            id: 3,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Swimming pool
            alt: "Swimming Pool",
            category: "Amenities"
        },
        {
            id: 4,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Beach view
            alt: "Beach View",
            category: "Surroundings"
        },
        {
            id: 5,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Garden pathway
            alt: "Garden Pathway",
            category: "Exterior"
        },
        {
            id: 6,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: City view
            alt: "City View",
            category: "Surroundings"
        },
        {
            id: 7,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Infinity pool
            alt: "Infinity Pool",
            category: "Amenities"
        },
        {
            id: 8,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Beachfront
            alt: "Beachfront",
            category: "Surroundings"
        },
        {
            id: 9,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Hotel at sunset
            alt: "Hotel at Sunset",
            category: "Exterior"
        },
        {
            id: 10,
            src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder for: Swimming pool with view
            alt: "Swimming Pool with View",
            category: "Amenities"
        }
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImageModal = (imageId) => {
        const index = galleryImages.findIndex(img => img.id === imageId);
        setCurrentIndex(index);
        setSelectedImage(galleryImages[index]);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        let newIndex = currentIndex + direction;

        // Handle wrapping around
        if (newIndex < 0) newIndex = galleryImages.length - 1;
        if (newIndex >= galleryImages.length) newIndex = 0;

        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    return (
        <div className="max-w-screen-lg mx-auto bg-white p-3  md:p-4">
            {/* Header with back button */}
            <div className="flex items-center mb-8 md:mb-6">
                <button onClick={() => navigate("/room-details/1")} className="flex items-center gap-2  text-gray-800 hover:text-gray-600">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    <span className="font-medium text-md md:text-base">Gallery Hotel Photos</span>
                </button>

                {/* <button className="ml-auto rounded-full p-1 md:p-2 hover:bg-gray-100">
          <Share2 className="w-4 h-4 md:w-5 md:h-5" />
        </button> */}
            </div>

            {/* Gallery Grid */}
            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openImageModal(image.id)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 md:p-4">
                    <div className="relative max-w-4xl w-full">
                        {/* Close button */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-2 right-2 md:top-4 md:right-4 text-white bg-black bg-opacity-50 rounded-full p-1 md:p-2 hover:bg-opacity-70 z-10"
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/* Navigation buttons */}
                        <button
                            onClick={() => navigateImage(-1)}
                            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-1 md:p-2 hover:bg-opacity-70 z-10"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <button
                            onClick={() => navigateImage(1)}
                            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-1 md:p-2 hover:bg-opacity-70 z-10"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full rounded-t-lg"
                        />

                        {/* Image info */}
                        <div className="bg-white p-3 md:p-4 rounded-b-lg">
                            <p className="font-medium text-gray-800 text-sm md:text-base">{selectedImage.alt}</p>
                            <p className="text-xs md:text-sm text-gray-500">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;