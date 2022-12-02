import axios from "axios";
const APIKEY = 'ckey_f2a7d8e02ddb427ea2764a67733';
const baseURL = 'https://api.covalenthq.com/v1';
const blockchainChainId = '9001';

export const getTransactions = async(address) => {
    let txs = [];
        const res = await axios.get(`${baseURL}/${blockchainChainId}/address/${address}/transactions_v2/?no-logs=false&page-size=15&key=${APIKEY}`)
        .catch((err) => {
            console.log(err.response.status);
            window.location.href = "/error/";
            return;
        });
        console.log(res.data.data);
    return txs;
}