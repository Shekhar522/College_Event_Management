import React from 'react'

function Statcard ({bgcolor,iconcolor,icon,title,number,arwcolor,textcolor,arrow,percent,para}) {
  return (
    <div className="bg-white p-2 rounded-sm shadow flex flex-row justify-around items-center ">
      <div className={`${bgcolor} ${iconcolor} p-3 rounded-sm  text-2xl`}>
        {icon}
      </div>
      <div className="flex flex-col justify-between items-start ">
        <h2 className="text-[12px] text-gray-800">{title}</h2>
        <h1 className="text-[16px] text-black font-medium">{number}</h1>
        <div className='flex flex-row'>
            <span className={`${arwcolor} ${textcolor} text-[8px] mt-0.5`}>{arrow} </span>
            <p className='text-gray-500 text-[10px]'><span className='text-green-600'>{percent} </span>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Statcard;
