import { Request, Response } from "express";
import * as pokemonService from "../service/pokemon.service";


export class MainController {

    constructor() {

    }

    public test(req: Request, res: Response) {
        return res.send("OK");
    }

    public  async getAllPokemons(req: Request, res: Response) {
        const pokemons =  await pokemonService.getPokemons();
        return res.status(200).send(pokemons);
    }

    public getQuestion(req: Request, res: Response) {
        let question = pokemonService.createQuestion();
        return res.status(200).send(question);
    }

    public checkAnswer(req: Request, res: Response) {
        return res.send("ok");
    }

}

export const controller = new MainController();