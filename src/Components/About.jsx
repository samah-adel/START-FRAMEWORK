import React from 'react'

export default function About() {
  return (
    <div className="bgBasic text-white text-center py-32 w-full ">
      <h1 className="text-4xl font-bold">ABOUT COMPONENT</h1>
      <div className="flex text-xl items-center justify-center mt-4">
        <div className="w-24 h-1 bg-white mr-2"></div>
        <i className="fa-solid fa-star  text-white"></i>
        <div className="w-24 h-1 bg-white ml-2"></div>
      </div>
      <div className="mt-6  px-10 md:flex md:space-x-10 text-lg">
        <p className=" md:w-1/2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className="md:w-1/2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
  )
}
