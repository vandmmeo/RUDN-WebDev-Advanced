import express from 'express';
import { cardsRouter } from './routes/cards.routed.ts';
const app = express();

app.use(cardsRouter);

app.listen(3001);
