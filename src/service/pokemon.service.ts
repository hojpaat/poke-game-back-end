import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../model/pokemon.model";
import { Question } from "../model/question.model";

const http = axios.create( {
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

let pokemonList: Pokemon[] = [];

export const works = () => {
}

export const getPokemons = async () => {
    let pokemons: Pokemon[] = [];
        for (let i: number = 1; i < 51; i++) {
        const response = await getById(i.toString());
        pokemons.push(pokemonMapper(response));
    }
    return pokemons;
}

const pokemonMapper = (res: AxiosResponse<any, any>) => {
    return new Pokemon(res.data.id, res.data.name, res.data.sprites.front_default);
}

export const getById = (id: string) => {
    return http.get(id);
}

export const shufflePokemons = (pokemons: Pokemon[]) => {
    for (let i: number = 0; i < pokemons.length; i++) {
        const j: number = Math.floor(Math.random() * pokemons.length) + 1;
        [pokemons[i], pokemons[j]] = [pokemons[j], pokemons[i]];
    }
}

export const createQuestion = () => {
    // create question and answers array
    let question = new Question();
    let answers: string[] = [];
    // randomize pokemon array
    shufflePokemons(pokemonList);
    // get a random index
    const index = Math.floor(Math.random() * (pokemonList.length - 3));
    let i = 0;
    while (answers.length < 4) {
        let currentPokemon = pokemonList[index + i];
        // skip undefined pokemon and check next one
        if(currentPokemon == undefined) {
            i++;
            continue;
        }
        // first not undefined pokemon will be the correct one
        if ( answers.length == 0) {
            question.setPokemonId(currentPokemon.getId());
            question.setpokeminImage(currentPokemon.getImage());
        }
        // adding answer options
        answers[i] = currentPokemon.getName();
        i++;
    }
    question.setAnswers(answers);
    return question;
}

const updatePokemonList = async () => {
    for (let i: number = 1; i < 51; i++) {
        const response = await getById(i.toString());
        pokemonList.push(pokemonMapper(response));
    }
}

updatePokemonList();
