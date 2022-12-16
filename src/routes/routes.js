import { Router} from "express";
import {  compareTransactions, getAllTransactionsAddress, getLastTransactionAdress } from "../useCases";

const router = Router();

router.post("/getAllTransactionsAddress", async(req,res) => {
    await getAllTransactionsAddress(req.body.address,res)
});

router.post('/getLastTransactionAddress', async(req,res) => {
    await getLastTransactionAdress(req.body.address,res)
})

router.post('/compareTransactionsAddress', async(req,res) => {
    await compareTransactions(req.body.address,res)
})

export default router;
