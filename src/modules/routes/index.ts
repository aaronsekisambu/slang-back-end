import * as express from 'express';
import spelling from '../controllers';
const app = express.Router();

app.post('/start-now', spelling.startGame);

export default app;
