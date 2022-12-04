import axios from "axios";
import moment from "moment";
const APIKEY = 'ckey_f2a7d8e02ddb427ea2764a67733';
const baseURL = 'https://api.covalenthq.com/v1';
const blockchainChainId = '9001';

// Test Address - 0x47c5dcfd55b83fbd0a39ac62db9558624723d29f
/* 

    Transfers : {
        Date : {
            t1 : {}
            t2 : {}
        }
    }

*/
export const getTransactions = async(address) => {
    let txs = [];
        const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${address}/transactions_v2/?no-logs=false&key=${APIKEY}`)
        .catch((err) => {
            console.log(err.response.status);
            window.location.href = "/error/";
            return;
        });
        console.log(res.data.data);
        for(const i of res.data.data.items){
            if(i.log_events.length !== 0){
                for(const j of i.log_events){
                    if(j.decoded !== null){
                    if(j.decoded.name === "Transfer"){
                        let d = moment(j.block_signed_at);
                        const found = txs.some(el => el.date === d.format("MMMM Do YYYY"));
                        if(!found){
                            if(j.decoded.params[0]["value"] === address){
                                txs.push({ date : d.format("MMMM Do YYYY"), 
                                list : [{ticker : j.sender_contract_ticker_symbol ,from : j.decoded.params[0]["value"], to : j.decoded.params[1]["value"], amt : (parseInt(j.decoded.params[2]["value"])/(10**j.sender_contract_decimals)), inwards : false, time : d.format("hh : mm")}]});
                            }
                            else{
                                txs.push({ date : d.format("MMMM Do YYYY"), 
                                list : [{ticker : j.sender_contract_ticker_symbol ,from : j.decoded.params[0]["value"], to : j.decoded.params[1]["value"], amt : (parseInt(j.decoded.params[2]["value"])/(10**j.sender_contract_decimals)), inwards : true, time : d.format("hh : mm")}]});
                            }                                
                        }
                        else{
                            let x = txs.find(el => el.date === d.format("MMMM Do YYYY"));
                            if(j.decoded.params[0]["value"] === address){
                                x.list.push({ticker : j.sender_contract_ticker_symbol ,from : j.decoded.params[0]["value"], to : j.decoded.params[1]["value"], amt : (parseInt(j.decoded.params[2]["value"])/(10**j.sender_contract_decimals)), inwards : false, time : d.format("hh : mm")});
                            }
                            else{
                                x.list.push({ticker : j.sender_contract_ticker_symbol ,from : j.decoded.params[0]["value"], to : j.decoded.params[1]["value"], amt : (parseInt(j.decoded.params[2]["value"])/(10**j.sender_contract_decimals)), inwards : true, time : d.format("hh : mm")});
                            }
                        }
                    //    console.log(d.format("dddd, MMMM Do YYYY"))
                    }
                  }
                }
            }
        }
    return txs;
}

export const getHRCBalances = async(address) => {
    let bal = [];
        const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&key=${APIKEY}`)
        .catch((err) => {
            console.log(err.response.status);
            window.location.href = "/error/";
            return;
        });
        for(const i of res.data.data.items){
            bal.push({name : i.contract_ticker_symbol, value : parseFloat(i.quote)})
        }
        return bal;
}

export const getNFTs = async(address) => {
    let NFTs = [];
        const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${APIKEY}`)
        .catch((err) => {
            console.log(err.response.status);
            window.location.href = "/error/";
            return;
        });
        console.log(res.data.data);
        for(const j of res.data.data.items){
            if(j.type === "nft"){
                NFTs.push({contract_address : j.contract_address, contract_name : j.contract_name, balances : j.nft_data.length, last_interacted : moment(j.last_transferred_at).format("dddd, MMMM Do YYYY")});
            }
        }
    return NFTs;
}