import {
    Animal,
    AnimalInterface,
    EmptyAnimal,
    // AssignAnimal,
    // EmptyAnimal,
} from "../models/Animal";

export const GetDataFromForm = (
    form: HTMLFormElement
): Animal | AnimalInterface => {
    const animal: AnimalInterface = EmptyAnimal();
    const acceptableKeys = Object.keys(animal);

    for (const el of form.elements) {
        if (el instanceof HTMLInputElement) {
            if (acceptableKeys.includes(el.id)) {
                const tmp = el.id as keyof AnimalInterface;
                const a = animal[tmp];
                animal[tmp] = el.value!;
            }
        }
    }

    return animal;
};
