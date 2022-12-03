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

        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
</svg>

          <span className="text-[15px] ml-4 text-gray-200">Wallet Address</span>
        </div>
        

      </div>
    </div>
  </div>


    </div>
  )
}

export default Sidebar;