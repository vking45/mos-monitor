import React from 'react'
import logo from '../assets/logo.png'

function Splash() {
  return (
    <div>
    <section className="text-gray-400 font-barlow">
    <div className=" mx-auto flex flex-col px-4 py-5 justify-center items-center">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded" alt="hero" src={logo}/>
      <div className="w-full md:w-2/3 flex flex-col items-center text-center">
        <h1 className="title-font font-extrabold sm:text-3xl lg:text-8xl mb-4 font-barlow text-blue-600">MosMonitor</h1>
        <p className="mb-8 leading-relaxed">Get easily comprehensible data for your EVMOS address</p>
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-center">
            <a href="/home/" className="mt-5 text-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-spicy shadow-lg dark:shadow-lg shadow-yellow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1 border-sky-600">Search</a>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
  )
}

export default Splash