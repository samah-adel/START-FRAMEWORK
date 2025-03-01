import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-800 text-white text-center py-16  w-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
          <div>
            <h2 className="font-bold">LOCATION</h2>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
          <div>
            <h2 className="font-bold">AROUND THE WEB</h2>
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-10 h-10 flex items-center justify-center  border border-white rounded-full">
                <i className="fa-brands fa-facebook text-xl cursor-pointer"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center  border border-white rounded-full">
                <i className="fa-brands fa-twitter text-xl cursor-pointer"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center  border border-white rounded-full">
                <i className="fa-brands fa-linkedin text-xl cursor-pointer"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
                <i className="fa-brands fa-github text-xl cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold">ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>

      </div>

      <p className="text-sm text-center p-5 bg-gray-900">Copyright &copy; Your Website 2021</p>
    </div>
  )
}
