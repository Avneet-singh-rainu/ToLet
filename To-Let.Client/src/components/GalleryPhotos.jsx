import React from 'react'
import { useNavigate } from 'react-router';
const images = [
    "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
];
const GalleryPhotos = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-between  pb-4'>
                <p className=' font-semibold text-xl'>Gallery Photos</p>
                <p onClick={() => { navigate("/room-details/gallery"); window.scrollTo(0, 0) }} className='text-green-500 font-semibold text-lg'>See All</p>
            </div>
            <div className='flex  mt-4 gap-3 overflow-x-scroll w-full'>
                {
                    images.map((img) => (
                        <img className='rounded-xl w-48' src={img} alt='Image' />
                    ))
                }
            </div>
        </div>
    )
}
export default GalleryPhotos