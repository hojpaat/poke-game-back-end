
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import { pageRouter } from './router/page.router';

const app = express();

app.use(bodyParser.json( { limit: '50mb' }));
app.use(cors());

app.use("/", pageRouter)

app.listen(8080, () => {
    console.log("Server is listening on port: " + 8080);
});

// class App {
//     public app: Application;
//     public router: PageRouter;

//     constructor() {
//         this.app = express();
//         this.router = new PageRouter(this.app);
//     }
// }