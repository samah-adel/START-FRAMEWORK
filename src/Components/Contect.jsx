import React from 'react'

export default function Contect() {
  return (
    <div className=" py-16 w-full bg-white">
      <h1 className="text-4xl text-center font-bold">CONTACT COMPONENT</h1>
      <div className="flex text-center text-3xl items-center justify-center mt-4">
        <div className="w-20 h-1 bg-black mr-2"></div>
        <i className="fa-solid fa-star text-black"></i>
        <div className="w-20 h-1 bg-black ml-2"></div>
      </div>
      <form className="max-w-lg mx-auto mt-10 space-y-6">
        <input type="text" name="userName" placeholder="userName" className="w-full border-b p-2 outline-none" />
        <input type="tel" name="userAge" placeholder="userAge" className="w-full border-b p-2 outline-none" />
        <input type="email" name="userEmail" placeholder="userEmail" className="w-full border-b p-2 outline-none" />
        <input type="password" name="userPassword" placeholder="userPassword" className="w-full border-b p-2 outline-none" />
        <button type="button" className=" bgBasic text-white px-6 py-2 rounded">send Message</button>
      </form>
    </div>
  )
}
