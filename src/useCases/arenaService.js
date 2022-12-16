import { mapResult } from "../utils/utils";

const ethers = require("ethers");
const ethABI = require("../utils/etherum.json");
require("dotenv").config();

const provider = new ethers.providers.WebSocketProvider(`wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_WEBSOCKET}`)

async function getTransactionsAddress(address){
    let count = 0
    const ethAdress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const contract = new ethers.Contract(ethAdress, ethABI, provider);
    const filter = contract.filters.Transfer(address);
    const query = await contract.queryFilter(filter);
    query.forEach(_ => count++)

    const result = mapResult(query);    
    
    return {
        count:count,
        transactions: result
    }
}

export const getLastTransactionAdress= async(address,res)=> {
    try {
        const result = await getTransactionsAddress(address);
        res.json(result.transactions[0]);
    } catch(e){
        res.status(500);
        res.send(e.message);
    }
};

export const getAllTransactionsAddress= async(address,res)=> {
    try {
        const result = await getTransactionsAddress(address);
        res.json(result);
    } catch(e){
        res.status(500);
        res.send(e.message);
    }
};

export const compareTransactions = async(address,res) => {
    try {
        let wallets = [];
        let numberOfTransactions= []
        let walletMaxT= [];

        for( var i=0; i <address.length ; i++){
            var result = await getTransactionsAddress(address[i]);
            wallets.push({transactions: result.count, address:address[i] })
            numberOfTransactions.push(result.count)
        }

        const maxTransaction= Math.max(...numberOfTransactions);

        wallets.filter((d) => {        
            if (d.transactions == maxTransaction ) {
                walletMaxT.push(d )
            }
        })

        res.json({
            message: "Wallet/s con mayor numero de transacciones ",
            wallet: walletMaxT
        });
        
    } catch(e){
        res.status(500);
        res.send(e.message);
    }
}
