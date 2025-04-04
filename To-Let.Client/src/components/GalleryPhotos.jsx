import React from 'react'
const images = [
    "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
];
const GalleryPhotos = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <p className=' font-semibold text-xl'>Gallery Photos</p>
                <p className='text-green-500 font-semibold text-lg'>See All</p>
            </div>
            <div className='flex rounded-3xl mt-4 gap-3 overflow-x-scroll w-full'>
                {
                    images.map((img) => (
                        <img className='rounded-4xl w-48' src={img} alt='Image' />
                    ))
                }
            </div>
        </div>
    )
}
export default GalleryPhotos