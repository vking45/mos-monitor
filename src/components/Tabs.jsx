import React from 'react';
import { useState } from 'react';
import Nfts from './Nfts';
import Tokens from './Tokens';
import Transfers from './Transfers';

function Tabs() {

    const [transfers, setTransfers] = useState(false);
    const [tokens, setTokens] = useState(true);
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
            {transfers ? <Transfers/> : ""}
            {tokens ? <Tokens /> : ""}
            {nfts ? <Nfts /> : ""}
        </div>
    </div>
  )
}

export default Tabs