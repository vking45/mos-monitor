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
            <div class="flex flex-col w-96">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Larry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Wild
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
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