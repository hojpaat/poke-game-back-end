
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { pageRouter } from './router/page.router';
import { DEFAULT_PORT } from './constants/enviroment';

const app = express();
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.json( { limit: '50mb' }));
app.use(cors());

app.use("/", pageRouter)

app.listen( PORT , () => {
    console.log("Server is listening on port: " + 8080);
});