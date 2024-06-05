export class Pokemon {
    id: number;
    name: string;
    image: string;

    constructor(id: number, name: string, image: string) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getImage() {
        return this.image;
    }

    public setId(id: number) {
        this.id = id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setImage(image: string) {
        this.image = image;
    }
}
