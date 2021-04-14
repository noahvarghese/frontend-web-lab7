/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
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

export const EmptyAnimal = (): AnimalInterface => ({
    id: undefined,
    animal: undefined,
    description: undefined,
    age: undefined,
    price: undefined,
});

export const AssignAnimal = (options?: any): AnimalInterface =>
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
    Logs.addLog(newAnimal, LogLevels.DEBUG);
    let urlParams = "";

    for (const key of Object.keys(newAnimal)) {
        const val = newAnimal[key as keyof Animal];
        Logs.addLog(typeof val, LogLevels.DEBUG);
        if (val && typeof val !== "function") {
            urlParams += `&${key}=${val}`;
        }
    }

    Logs.addLog(urlParams, LogLevels.DEBUG);

    const url = (newAnimal.id ? UpdatePermalink : AddPermalink) + urlParams;

    Logs.addLog(url, LogLevels.DEBUG);

    const response = await fetch(url);

    if (response.status === 200) {
        return new Animal(newAnimal);
    }

    return new Animal();
};

export class Animal implements AnimalInterface {
    public id!: number;
    public animal!: string;
    public description!: string;
    public age!: number;
    public price!: number;

    constructor(options?: any) {
        Object.assign(this, EmptyAnimal(), options);
    }

    delete = async () => {
        if (this.id) {
            const url = DeletePermalink + this.id;

            const response = await fetch(url);

            Logs.addLog(url, LogLevels.DEBUG);
            Logs.addLog(response, LogLevels.DEBUG);

            if (response.status === 200) {
                Object.assign(this, EmptyAnimal());
                return;
            }
        } else {
            Object.assign(this, EmptyAnimal());
        }

        throw new Error("Unable to delete animal");
    };
}
