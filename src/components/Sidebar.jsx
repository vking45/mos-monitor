import React from 'react'

function Sidebar() {
  return (
    <div className="h-full">
            

<span className="absolute text-white text-4xl top-5 left-4 cursor-pointer">
    <i className="bi bi-filter-left px-2 bg-gray-800 rounded-md"></i>
  </span>
  <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-800 shadow h-screen">
    <div className="text-gray-100 text-xl">
      <div className="p-2.5 mt-1 flex items-center rounded-md ">
        <h1 className="text-[15px]  ml-3 text-2xl text-gray-200 font-bold">Mosmonitor</h1>
        <i className="bi bi-x ml-20 cursor-pointer lg:hidden"></i>
      </div>
      <hr className="my-2 text-gray-600"/>

      <div>

        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300">
          <span className="text-[15px] text-gray-200 text-left">Please enter ETH form of wallet address.</span>
        </div>
        

      </div>
    </div>
  </div>


    </div>
  )
}

export default Sidebar;