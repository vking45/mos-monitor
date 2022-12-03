import React from 'react';

function Splash() {
  return (
    <div>
        <section className="text-gray-400 font-barlow">
    <div className=" mx-auto flex flex-col px-5 py-6 justify-center items-center">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded" alt="hero" src={logo}/>
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Mos</span>monitor</h1>
        <p className="mb-8 leading-relaxed">Get all the statistical data that your address/es need from the easy-to-use and fastest analytics platform for the hrc tokens.</p>
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-center">
            <Link to="/dashboard/" className=" mt-5 text-mild bg-gradient-to-r from-sss to-spicy hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-spicy shadow-lg dark:shadow-lg shadow-yellow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1">Fetch</Link>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
  )
}

export default Splash;