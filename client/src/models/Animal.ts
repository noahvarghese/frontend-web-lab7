import Logs, { LogLevels } from "../lib/Logs";
import {
    AddPermalink,
    DeletePermalink,
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

export class Animal implements AnimalInterface {
    public id?: number;
    public animal?: string;
    public description?: string;
    public age?: number;
    public price?: number;

    constructor(options?: any) {
        Object.assign(this, EmptyAnimal(), options);
    }

    add = async () => {};

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
