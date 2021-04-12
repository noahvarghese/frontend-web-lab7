import Logs, { LogLevels } from "../lib/Logs";
import {
    AddPermalink,
    DeletePermalink,
    GetPermalink,
    UpdatePermalink,
} from "../lib/Permalink";

export interface AnimalInterface {
    id?: number;
    animal?: string;
    description?: string;
    age?: number;
    price?: number;
}

const EmptyAnimal = (): AnimalInterface => ({
    id: undefined,
    animal: undefined,
    description: undefined,
    age: undefined,
    price: undefined,
});

const AssignAnimal = (options?: any): AnimalInterface =>
    Object.assign(EmptyAnimal(), options);

export const GetAllAnimals = async (): Promise<Animal[]> => {
    const animals: Animal[] = [];
    const response = await fetch(GetPermalink);

    if (response.status === 200) {
        const data = await response.json();
        for (const props of data) {
            animals.push(new Animal(props));
        }
    }

    return animals;
};

export const AnimalFactory = async (options?: any): Promise<Animal> => {
    const newAnimal = Object.assign(EmptyAnimal(), options);
    let urlParams = "";

    for (const key of Object.keys(newAnimal)) {
        urlParams += `&${key}=${newAnimal[key as keyof Animal]}`;
    }

    urlParams = encodeURIComponent(urlParams);

    const url = AddPermalink + urlParams;

    const response = await fetch(url);

    if (response.status === 200) {
        return new Animal(newAnimal);
    }

    return new Animal();
};

export class Animal implements AnimalInterface {
    public id?: number;
    public animal?: string;
    public description?: string;
    public age?: number;
    public price?: number;

    constructor(options?: any) {
        Object.assign(this, EmptyAnimal(), options);
    }

    update = async (options?: any) => {
        const updatedAnimal: AnimalInterface = Object.assign(
            {},
            this,
            AssignAnimal(options)
        );

        let urlParams = "";

        for (const key of Object.keys(updatedAnimal)) {
            urlParams += `&${key}=${this[key as keyof Animal]}`;
        }

        urlParams = encodeURIComponent(urlParams);

        const url = UpdatePermalink + urlParams;

        const response = await fetch(url);

        if (response.status === 200) {
            Object.assign(this, updatedAnimal);
            return;
        }

        throw new Error("Unable to update animal");
    };

    delete = async () => {
        const url = DeletePermalink + this.id;

        const response = await fetch(url);

        Logs.addLog(url, LogLevels.DEBUG);
        Logs.addLog(response, LogLevels.DEBUG);

        if (response.status === 200) {
            Object.assign(this, EmptyAnimal());
            return;
        }

        throw new Error("Unable to delete animal");
    };
}
