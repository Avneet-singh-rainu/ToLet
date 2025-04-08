import React from 'react'
import { ArrowLeft, Bookmark, EllipsisVertical } from 'lucide-react'
const Back = () => {
    return (
        <div className='flex justify-between absolute top-4 px-4 py-2 items-center z-10 w-full'>
            <div>
                <ArrowLeft color='white' size={28} />
            </div>
            <div className='flex gap-4'>
                <Bookmark color='white' size={28} />
                <EllipsisVertical color='white' size={28} />
            </div>
        </div>
    )
}

export default Back