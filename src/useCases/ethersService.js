import { mapResult } from "../utils/utils";

const ethers = require("ethers");
const ethABI = require("../utils/etherum.json");
require("dotenv").config();

const provider = new ethers.providers.WebSocketProvider(`wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_WEBSOCKET}`)

export async function getTransactionsAddress(contractAddress,address){
    try{
        let count = 0
        const contract = new ethers.Contract(contractAddress, ethABI, provider);
        const filter = contract.filters.Transfer(address);
        const query = await contract.queryFilter(filter);
        query.forEach(_ => count++)
    
        const result = mapResult(query);    
        
        return {
            count:count,
            transactions: result
        }
    } catch(e){
        return e
    }
}

export const compareTransactions = async(contractAddress,address) => {
    try {
        let wallets = [];
        let numberOfTransactions= []
        let walletMaxT= [];

        for( var i=0; i <address.length ; i++){
            var result = await getTransactionsAddress(contractAddress,address[i]);
            wallets.push({transactions: result.count, address:address[i] })
            numberOfTransactions.push(result.count)
        }

        const maxTransaction= Math.max(...numberOfTransactions);

        wallets.filter((d) => {        
            if (d.transactions == maxTransaction ) {
                walletMaxT.push(d )
            }
        })
        return walletMaxT;
    } catch(e){
      return e;
    }
}

