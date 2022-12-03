import React from 'react'

function Transfers() {
  return (
    <div className="flex flex-col w-2/3 ml-44 mx-6 my-6">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <div className="flex"><span className="justify-start items-top text-lg text-left text-gray-300">28 December 2020</span></div>
              <tbody>
                <tr className="border-b border-gray-500 px-4 py-4">
                  <td className="text-sm inline-flex text-white font-medium px-6 py-4 whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff0000" className=" ml-2 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                  </svg>

                    <span className="text-white font-light whitespace-nowrap text-lg">Sent</span>
                  </td>
                  <td className="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                    XXX
                  </td>
                  <td className="text-lg text-red-600 font-light px-6 py-4 whitespace-nowrap">
                    -Txn
                  </td>
                  <td className="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                    amt
                  </td>
                  <td className="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                    time
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="text-sm inline-flex text-white font-medium px-6 py-4 whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#50C878" className=" ml-2 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                  </svg>


                    <span className="text-white font-light whitespace-nowrap text-lg">Received</span>
                  </td>
                  <td className="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                    ONE
                  </td>
                  <td className="text-lg text-green-600 font-light px-6 py-4 whitespace-nowrap">
                    +Txn
                  </td>
                  <td className="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                    amt
                  </td>
                  <td className="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                    time
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfers;