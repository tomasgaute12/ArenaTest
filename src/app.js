import express from "express";
import morgan from "morgan";
import router from "./routes/routes";


const app = express();
const bodyParser = require('body-parser');


app.use(express.json());

app.set("port", 4000);

app.use(morgan("dev")); //detalles de las peticiones que hago

app.use("/api/wallets",router)

export default app;
