import { Router } from "express";
import { post, remove, get } from "../controllers/cards.controller.ts";
import { checkCard } from "../middlewares/checkCard.ts";

export const cardsRouter = Router();

cardsRouter.get ('/cards', get);

cardsRouter.post(
    '/cards',
    checkCard,
     post); 

cardsRouter.delete('/cards', remove);