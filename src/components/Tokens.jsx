import React from 'react'
import Example from './Piegraph'
import { getHRCBalances } from '../covalent/api'
import { enteredAddr } from './Searchbar'

class Tokens extends React.Component {

    state = {dataArray : [], loading : true, totalBal : 0}

    componentDidMount(){
        if(enteredAddr.length === 42){
        getHRCBalances(enteredAddr).then((i) => {
            let out = 0
            for(const j of i){
              out += j.value;
            }
            this.setState({ dataArray : i, loading : false, totalBal : out});
        })
        }   
    }

    render(){
    return (
        <div className="w-full h-full ml-44 max-w-4xl">
          <section className="ml-500">
            <div className="w-1/3 ml-4 flex justify-center ml-500 align-middle text-white bg-blue-100 h-full border border-gray-700 shadow-md mx-4 rounded-lg overflow-hidden py-5">
                {this.state.loading ? <p className='text-white'>Loading...</p> : <Example data={this.state.dataArray}/>}
            </div>
          </section>
            <div className="flex text-right ml-4">
                <div className="bg-blue-600 rounded w-10 h-10 justify-center align-middle my-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                </svg>
                </div>
                <div className="mx-4 text-4xl ml-4 text-white mt-4">
                    Balance: ${this.state.loading ? "" : this.state.totalBal.toFixed(4)}
                </div>
            </div>
            <div className="my-4">
            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-mild uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Token
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Holdings
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {
                            this.state.dataArray.map((tok) => (
                                <tr className="bg-gray-900 border-b border-gray-700 text-spicy" key={tok.contract_address}>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                    <a>
                                        {tok.full_name}
                                    </a>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                <a>
                                        {tok.add}
                                    </a>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                        {tok.holding}
                                </th>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        )
    }
}

export default Tokens