import React from 'react';
import { useState } from 'react';

function Tabs() {

    const [transfers, setTransfers] = useState(true);
    const [tokens, setTokens] = useState(false);
    const [nfts, setNfts] = useState(false);

    const active_tab = "inline-block p-4 rounded-t-lg border-b-2 text-blue-600 border-blue-600 hover:text-blue-600 hover:border-blue-600 active:text-blue-600";
    const normal_tab = "inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-100 hover:text-blue-600 hover:border-blue-600";
    
    const onTransfers = () => {
        setTransfers(true);
        setTokens(false);
        setNfts(false);
    }
    const onTokens = () => {
        setTokens(true);
        setTransfers(false);
        setNfts(false);
    }
    const onNfts = () => {
        setNfts(true);
        setTransfers(false);
        setTokens(false);
    }

    return (
        <div>
        <div className="flex justify-center align-middle">
            
            <div className="mb-4 border-b-2  dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-xl font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button className={ tokens ? active_tab : normal_tab } id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false" onClick={onTokens}>Tokens</button>
                    </li>

                    <li className="mr-2" role="presentation">
                        <button className={ transfers ? active_tab : normal_tab} id="transfer-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={onTransfers}>Transfers</button>
                    </li>

                    <li className="" role="presentation">
                        <button className={ nfts ? active_tab : normal_tab } id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false" onClick={onNfts}>NFTs</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex justify-center align-middle">
            {transfers ? 
            
            <div class="flex flex-col w-2/3 ml-44 mx-6 my-6">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <div className="flex"><span className="justify-start items-top text-lg text-left text-gray-300">28 December 2020</span></div>
          <tbody>
            <tr class="border-b border-gray-500 px-4 py-4">
              <td class="text-sm inline-flex text-white font-medium px-6 py-4 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff0000" class=" ml-2 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
              </svg>

                <span className="text-white font-light whitespace-nowrap text-lg">Sent</span>
              </td>
              <td class="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                XXX
              </td>
              <td class="text-lg text-red-600 font-light px-6 py-4 whitespace-nowrap">
                -Txn
              </td>
              <td class="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                amt
              </td>
              <td class="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                time
              </td>
            </tr>
            <tr class="border-b border-gray-500">
              <td class="text-sm inline-flex text-white font-medium px-6 py-4 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#50C878" class=" ml-2 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
              </svg>


                <span className="text-white font-light whitespace-nowrap text-lg">Received</span>
              </td>
              <td class="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                ONE
              </td>
              <td class="text-lg text-green-600 font-light px-6 py-4 whitespace-nowrap">
                +Txn
              </td>
              <td class="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                amt
              </td>
              <td class="text-lg text-white font-light px-6 py-4 whitespace-nowrap">
                time
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
            : ""}
            {tokens ? <p className='text-white'>Tokens</p> : ""}
            {nfts ? <p className='text-white'>NFTs</p> : ""}
        </div>
    </div>
  )
}

export default Tabs