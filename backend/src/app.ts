import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import Routes from './routes';
import Connect from './mongodb'

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send("TS App");
});

const PORT = process.env.PORT || 4100;
const db = "mongodb://localhost:27017/user";

Connect({db});
Routes({app});

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});