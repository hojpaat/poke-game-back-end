import { controller } from "../controller/main.controller";
import express from "express";

export const pageRouter = express.Router();

// testing application if it is running
pageRouter.get("/test", controller.test);
// get list of all Pokemons
pageRouter.get("/all", controller.getAllPokemons);
// get question with correct answer and options
pageRouter.get("/question", controller.getQuestion);
