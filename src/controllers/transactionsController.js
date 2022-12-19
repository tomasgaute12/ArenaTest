import { compareTransactions, getTransactionsAddress } from "../useCases";

export const getLastTransactionAdress= async(body,res)=> {
    try {
        const result = await getTransactionsAddress(body.contractAddress,body.address);
        res.json({
            message: "Ultima transaccion",
            wallet: result.transactions[0]
        });
    } catch(e){
        res.status(500);
        res.send(e.message);
    }
};

export const getAllTransactionsAddress= async(body,res)=> {
    try {
        const result = await getTransactionsAddress(body.contractAddress,body.address);
        res.json({
            message: "Todas las transacciones",
            wallet: result
        });
    } catch(e){
        res.status(500);
        res.send(e.message);
    }
};

export const compareTransactionsAddress = async(body,res) => {
    try {
        const result = await compareTransactions(body.contractAddress,body.address);
        res.json({
            message: "Wallet/s con mayor numero de transacciones ",
            wallet: result
        });
    } catch(e){
        res.status(500);
        res.send(e.message);
    }
}
