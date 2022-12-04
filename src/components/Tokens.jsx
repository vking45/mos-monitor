import React from 'react'
import Example from './Piegraph'
import { getHRCBalances } from '../covalent/api'
import { enteredAddr } from './Searchbar'

class Tokens extends React.Component {

    state = {dataArray : [], loading : true}

    componentDidMount(){
        if(enteredAddr.length === 42){
        getHRCBalances(enteredAddr).then((i) => {
            this.setState({ dataArray : i, loading : false});
        })
        }   
    }

    render(){
    return (
        <div className="w-full ml-44 max-w-6xl">
            <div>
                {this.state.loading ? "Loading..." : <Example data={this.state.dataArray}/>}
            </div>
            <div className="flex">
                <div className="bg-blue-600 rounded w-18 h-18 justify-center align-middle ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                </svg>
                </div>
                <div className=" mx-4 text-4xl text-white mt-4">
                    Balance: $95
                </div>
            </div>
            <div className="">
                    Table
            </div>
        </div>
        )
    }
}

export default Tokens