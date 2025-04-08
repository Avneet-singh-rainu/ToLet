import { Bath, Bed, Hotel, LandPlot, MapPin, Phone } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import React, { useEffect, useState } from 'react'
import GalleryPhotos from '../components/GalleryPhotos'
import ImageSlider from '../components/ImageSlider';
import Back from '../components/Back';
import CustomTileLayer from '../components/HomePage/CustomTileLayer';
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

const RoomDetailsPage = ({ roomName = "Royale President Hotel", address = "79 Place de la Madeleine, Paris 75009, France" }) => {
    const [position, setPosition] = useState([30.727, 76.8442]);
    const [currentPostion, setCurrentPosition] = useState([34.4, 544.5]);


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
    const RecenterMap = ({ position }) => {
        const map = useMap();

        useEffect(() => {
            map.setView(position);
        }, [position, map]);

        return null;
    };
    const customIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
    return (
        <div className='overflow-x-hidden min-h-screen relative pb-0'>
            <Back />
            <ImageSlider />
            <div className='px-4 py-4 mt-4 mb-8'>
                <p className='text-3xl py-2 mb-3 font-semibold'>{roomName}</p>
                <div className='flex items-center text-md gap-1'>
                    <MapPin size={15} color="green" />
                    <p>{address}</p>
                </div>
            </div>
            <div className='px-4 py-2'>
                <GalleryPhotos />
            </div>
            <div className='px-4 py-4 mt-8'>
                <p className='text-xl py-4 font-semibold'>Details</p>
                <div className='flex w-full justify-between mt-3'>
                    {details.map((item, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <div>{item.logo}</div>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-4 py-4 mt-8'>
                <p className='text-xl py-4 font-semibold'>Description</p>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi sem, sagittis sed dolor cursus, hendrerit viverra nulla. Etiam egestas libero scelerisque nibh tristique interdum. Praesent turpis nunc, porttitor sit amet sem at, luctus egestas nunc.</p>
            </div>
            <div className="relative h-[40vh] w-full">
                <MapContainer
                    center={position}
                    zoom={20}
                    zoomControl={false}
                    className="absolute top-0 h-[40vh] w-full shadow-md"
                >
                    <CustomTileLayer type="osm" />
                    <Marker position={position} icon={customIcon}>
                        <Popup className="font-medium">Room Location</Popup>
                    </Marker>
                    <Marker position={currentPostion} icon={customIcon}>
                        <Popup className="font-medium">You are here</Popup>
                    </Marker>
                    <RecenterMap position={position} />
                </MapContainer>
            </div>
            <div className='fixed bottom-0 border-t border-slate-300 left-0 w-full py-4 px-4 bg-white shadow-lg '>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-medium text-green-600'>Rs. 5000<span className='text-sm text-black'>/Month</span></p>
                    <button className='bg-green-500 hover:bg-green-600 rounded-full text-white font-semibold px-8 py-3 text-lg flex items-center gap-2'>
                        <Phone size={18} />
                        Call Now!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoomDetailsPage;
