import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './modules/routes';
import path from 'path';
const app: Application = express();

// setup morgan
app.use(morgan('dev'));

// public folder
app.use(express.static(path.resolve(__dirname, '../public')));
// setup body parser
app.use(cors());
app.use(bodyParser.json());

// routes setup
app.use('/api/v1', routes);

app.get('/', (_req: Request, res: Response) => {
    try {
        return res
            .status(200)
            .send({
                status: 200,
                welcome: 'Welcome to Slang, Learn something today 📝',
            });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            error: 'server error',
        });
    }
});
export default app;