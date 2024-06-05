export class Question {
    private pokemonId: number;
    private pokemonImage: string;
    private answers: string[];

    public setPokemonId(id: number) {
        this.pokemonId = id;
    }

    public setpokeminImage(image: string) {
        this.pokemonImage = image;
    }
    
    public setAnswers(answers: string[]) {
        this.answers = answers;
    }

    public getPokemonId() {
        return this.pokemonId;
    }

    public getPokemonImage() {
        return this.pokemonImage;
    }
    
    public getAnswers() {
        return this.answers;
    }
}