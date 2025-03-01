import React from 'react'
import Ima from '../assets/avataaars.svg'

export default function Home() {
  return (
    <div className="flex text-3xl text-white flex-col items-center p-10  bgBasic">
      <img
        src={Ima}
        alt="Avatar"
        className="w-full  h-60 rounded-full "
      />
      <h1 className="text-3xl font-bold mt-6">START FRAMEWORK</h1>

      <div className="flex  text-3xl items-center mt-4">
        <div className="w-20 h-1 bg-white mr-2"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="w-20 h-1 bg-white ml-2"></div>
      </div>

      <p className="text-lg  mt-3">Graphic Artist - Web Designer - Illustrator</p>
    </div>

  )
}
