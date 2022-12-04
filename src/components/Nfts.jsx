import React from "react";
import { getNFTs } from "../covalent/api";
import { enteredAddr } from "./Searchbar";

class Nfts extends React.Component {
    state = {nfts : [], loading : true, empty : false};

    componentDidMount(){
        if(enteredAddr.length === 42){
        getNFTs(enteredAddr).then((balNFTs) => {
            if(balNFTs.length === 0){
                this.setState({empty : true, loading : false});
            }
            else{
                this.setState({nfts : balNFTs, loading : false});
            }
        })
    }
    }

    render() {
    return(
        <>
        <div className="overflow-x-auto relative rounded-md text-center">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-mild uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Last Interacted 
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Count
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.loading ? <p className='text-white text-center'>Loading...</p> : ""}
                    {this.state.empty ? <p className='text-white text-center'>No NFTs for this Address</p> : ""}
                        {
                            this.state.nfts.map((tok) => (
                                <tr className="bg-gray-900 border-b border-gray-700 text-spicy" key={tok.contract_address}>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                    <a href={`https://explorer.harmony.one/address/${tok.contract_address}`} target="blank" >
                                        {tok.contract_name}
                                    </a>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                <a href={`https://explorer.harmony.one/address/${tok.contract_address}`} target="blank" >
                                        {tok.contract_address}
                                    </a>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                        {tok.last_interacted}
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                        {tok.balances}
                                </th>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
        </>
    )
}
}

export default Nfts;
