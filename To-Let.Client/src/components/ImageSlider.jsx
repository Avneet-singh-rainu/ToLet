import React, { useState, useEffect } from "react";
const images = [
    "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
];
const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(() => nextSlide(), 3500);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative w-full max-w-xl mx-auto">
            <div className="overflow-hidden">
                <img
                    src={images[current]}
                    alt="slider"
                    className="w-full h-72 object-cover transition duration-500 ease-in-out"
                />
            </div>
            <div className="flex justify-center absolute bottom-3 left-[50%] transform -translate-[50%] gap-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-2 cursor-pointer rounded-full ${index === current ? "w-8 bg-green-500" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
