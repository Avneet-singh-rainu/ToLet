import {
    Bath,
    Bed,
    Hotel,
    LandPlot,
    MapPin,
    Phone,
    Star,
    Heart,
    Share,
    Coffee,
} from "lucide-react";
import { MapContainer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import React, { useEffect, useState } from "react";
import GalleryPhotos from "../components/GalleryPhotos";
import ImageSlider from "../components/ImageSlider";
import Back from "../components/Back";
import CustomTileLayer from "../components/HomePage/CustomTileLayer";

// Auto-fit both markers in view
const AutoFitBounds = ({ positionA, positionB }) => {
    const map = useMap();

    useEffect(() => {
        if (!positionA || !positionB) return;
        const bounds = L.latLngBounds([positionA, positionB]);
        if (
            !map.getBounds().contains(positionA) ||
            !map.getBounds().contains(positionB)
        ) {
            map.fitBounds(bounds, { padding: [80, 80] });
        }
    }, [positionA, positionB, map]);

    return null;
};

const RoomDetailsPage = ({
    roomName = "Royale President Hotel",
    address = "79 Place de la Madeleine, Paris 75009, France",
    price = "5000",
    rating = 4.8,
    reviews = 127,
}) => {
    const [position, setPosition] = useState([30.727, 76.8442]); // Room location
    const [currentPosition, setCurrentPosition] = useState([30.74, 76.83]); // User location
    const [isFavorite, setIsFavorite] = useState(false);

    const details = [
        {
            name: "Hotel",
            logo: <Hotel size={20} className="text-emerald-600" />,
            value: "Luxury",
        },
        {
            name: "Bedrooms",
            logo: <Bed size={20} className="text-emerald-600" />,
            value: "4",
        },
        {
            name: "Bathrooms",
            logo: <Bath size={20} className="text-emerald-600" />,
            value: "2",
        },
        {
            name: "Area",
            logo: <LandPlot size={20} className="text-emerald-600" />,
            value: "4000 sqft",
        },
    ];

    const amenities = [
        { name: "WiFi", logo: <Coffee size={16} className="text-emerald-600" /> },
        { name: "AC", logo: <Coffee size={16} className="text-emerald-600" /> },
        {
            name: "Parking",
            logo: <Coffee size={16} className="text-emerald-600" />,
        },
        {
            name: "Kitchen",
            logo: <Coffee size={16} className="text-emerald-600" />,
        },
    ];

    useEffect(() => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setCurrentPosition([latitude, longitude]);
                },
                (err) => console.error("Geolocation error:", err),
                { enableHighAccuracy: true }
            );
            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    const customIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <div className="overflow-x-hidden min-h-screen relative pb-24 bg-gray-50">
            <div className="relative">
                <Back className="absolute top-4 left-4 z-10" />
                <ImageSlider className="h-56 md:h-72 w-full object-cover" />

                <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="bg-white p-2 rounded-full"
                    >
                        <Heart
                            size={18}
                            className={
                                isFavorite
                                    ? "fill-red-500 text-red-500"
                                    : "text-gray-500"
                            }
                        />
                    </button>
                    <button className="bg-white p-2 rounded-full">
                        <Share size={18} className="text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Room Info Card */}
            <div className="bg-white rounded-t-3xl -mt-6 relative px-4 sm:px-6 py-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                            {roomName}
                        </h1>
                        <div className="flex items-center mt-2 text-gray-600">
                            <MapPin
                                size={14}
                                className="text-emerald-600 mr-1 flex-shrink-0"
                            />
                            <p className="text-xs sm:text-sm">{address}</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-emerald-50 px-3 py-1 rounded-lg mt-2 sm:mt-0 self-start">
                        <Star size={14} className="text-yellow-500 mr-1" />
                        <span className="font-semibold text-sm">{rating}</span>
                        <span className="text-xs text-gray-500 ml-1">
                            ({reviews})
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 my-5"></div>

                {/* Room Details */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Property Details
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {details.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-xl"
                            >
                                <div className="mb-1">{item.logo}</div>
                                <div className="font-semibold text-emerald-700 text-sm">
                                    {item.value}
                                </div>
                                <div className="text-xs text-gray-500">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Amenities */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Amenities
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {amenities.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-gray-50 px-3 py-2 rounded-lg"
                            >
                                <div className="mr-1">{item.logo}</div>
                                <div className="text-xs font-medium">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Description
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Experience luxury living in this beautifully designed space.
                        Featuring modern amenities, elegant decor, and convenient
                        location, this property is perfect for both short and long
                        stays. The spacious layout offers comfort with style.
                    </p>
                </div>

                {/* Photos */}
                <div className="mt-6">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Photos
                        </h2>
                        <button className="text-emerald-600 text-xs font-medium">
                            View All
                        </button>
                    </div>
                    <GalleryPhotos />
                </div>

                {/* Map Section */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Location
                    </h2>
                    <div className="h-52 sm:h-64 w-full rounded-xl overflow-hidden border border-gray-200">
                        <MapContainer
                            center={position}
                            zoom={14}
                            zoomControl={false}
                            className="h-full w-full"
                        >
                            <CustomTileLayer type="osm" />
                            <Marker position={position} icon={customIcon}>
                                <Popup className="font-medium">Room Location</Popup>
                            </Marker>
                            <Marker position={currentPosition} icon={customIcon}>
                                <Popup className="font-medium">You are here</Popup>
                            </Marker>
                            <Polyline
                                positions={[position, currentPosition]}
                                pathOptions={{
                                    color: "green",
                                    weight: 4,
                                    dashArray: "5, 5",
                                }}
                            />
                            <AutoFitBounds
                                positionA={position}
                                positionB={currentPosition}
                            />
                        </MapContainer>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="fixed bottom-0 left-0 w-full py-3 px-4 sm:px-6 bg-white border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xl font-bold text-emerald-600">
                            ₹{price}
                            <span className="text-xs text-gray-500 font-normal">
                                /Month
                            </span>
                        </p>
                    </div>
                    <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium px-4 py-2 rounded-xl flex items-center gap-1 transition-all text-sm sm:text-base">
                        <Phone size={16} />
                        <span className="sm:block">Call Landlord</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;