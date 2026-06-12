import React from 'react'
import { GrAnnounce } from "react-icons/gr";
const Announcement = () => {
  return (
    <div className='bg-white shadow p-2 '>
      <div className='flex flex-row p-2 justify-between items-center'>
        <h2 className='text-[12px] font-semibold'>Announcement</h2>
        <h5 className='text-[10px] text-violet-600 font-semibold'>View All</h5>
      </div>
      <div>
        <div>
            <span className='bg-violet-500 text-violet-800'><GrAnnounce/></span>
        </div>
        <div>
            <h2 className='text-[12px] font-medium text-gray-600'>Registration for TechnoVision are now open!</h2>
            <h5 className='text-[8px] text-gray-400'>2 hours ago</h5>
        </div>
      </div>
    </div>
  )
}

export default Announcement
