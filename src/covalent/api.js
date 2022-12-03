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
        for(const i of res.data.data.items){
            if(i.log_events.length !== 0){
                for(const j of i.log_events){
                    if(j.decoded.name === "Transfer"){
                        let d = moment(j.block_signed_at);
                        const found = txs.some(el => el.date === d.format("dddd, MMMM Do YYYY"));
                        if(!found){
                            txs.push({ date : d.format("dddd, MMMM Do YYYY"), 
                            list : [{ticker : j.sender_contract_ticker_symbol ,from : j.decoded.params[0]["value"], to : j.decoded.params[1]["value"], amt : (parseInt(j.decoded.params[2]["value"])/(10**j.sender_contract_decimals))}]
                            });
                        }
                        else{
                            let x = txs.find(el => el.date === d.format("dddd, MMMM Do YYYY"));
                            x.list.push({ticker : j.sender_contract_ticker_symbol ,from : j.decoded.params[0]["value"], to : j.decoded.params[1]["value"], amt : (parseInt(j.decoded.params[2]["value"])/(10**j.sender_contract_decimals))});
                        }
                    //    console.log(d.format("dddd, MMMM Do YYYY"))
                    }
                }
            }
        }
        console.log(txs);
    return txs;
}