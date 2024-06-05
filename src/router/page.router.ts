import { controller } from "../controller/main.controller";
import express from "express";

export const pageRouter = express.Router();

pageRouter.get("/test", controller.test);

pageRouter.get("/all", controller.getAllPokemons);

pageRouter.get("/question", controller.getQuestion);

pageRouter.get("/checkAnswer", controller.checkAnswer);
