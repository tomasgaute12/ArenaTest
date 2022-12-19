import { Router} from "express";
import { getAllTransactionsAddress,getLastTransactionAdress,compareTransactionsAddress } from "../controllers/transactionsController";

const router = Router();

router.post("/getAllTransactionsAddress", async(req,res) => {
    await getAllTransactionsAddress(req.body,res)
});

router.post('/getLastTransactionAddress', async(req,res) => {
    await getLastTransactionAdress(req.body,res)
})

router.post('/compareTransactionsAddress', async(req,res) => {
    await compareTransactionsAddress(req.body,res)
})

export default router;
