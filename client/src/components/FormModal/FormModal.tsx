/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import React, { MouseEvent, ChangeEvent } from "react";
import {
    Animal,
    AnimalFactory,
    AnimalInterface,
    AssignAnimal,
} from "../../models/Animal";
import Input from "../Input/Input";
import Blocker from "../Blocker/Blocker";
import "./FormModal.css";
import Logs, { LogLevels } from "../../lib/Logs";

interface FormModalProps {
    animal?: Animal;
    closeModal: () => void;
    loadAnimals: () => Promise<void>;
}

const FormModal: React.FC<FormModalProps> = ({
    animal,
    closeModal,
    loadAnimals,
}) => {
    const submitForm = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        closeModal();
        // Logs.addLog(options, LogLevels.DEBUG);
        try {
            if (animal) {
                Logs.addLog("UPDATE", LogLevels.DEBUG);
            } else {
                Logs.addLog("CREATE", LogLevels.DEBUG);
            }
            await AnimalFactory(tmpAnimal);
            await loadAnimals();
        } catch (e) {
            alert(e.message);
        }
    };

    const tmpAnimal: AnimalInterface = AssignAnimal(animal);

    const animalChange = (e: ChangeEvent<HTMLInputElement>) => {
        tmpAnimal.animal = e.currentTarget.value;
    };

    const descriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        tmpAnimal.description = e.currentTarget.value;
    };

    const ageChange = (e: ChangeEvent<HTMLInputElement>) => {
        tmpAnimal.age = e.currentTarget.valueAsNumber;
    };

    const priceChange = (e: ChangeEvent<HTMLInputElement>) => {
        tmpAnimal.price = e.currentTarget.valueAsNumber;
    };

    return (
        <>
            <Blocker />
            <div className="FormModal">
                <h1>{animal ? "Update" : "Create"}</h1>
                <form>
                    <Input
                        type="string"
                        name="animal"
                        value={animal?.animal}
                        onChange={animalChange}
                    />
                    <Input
                        type="string"
                        name="description"
                        value={animal?.description}
                        onChange={descriptionChange}
                    />
                    <Input
                        type="number"
                        name="age"
                        value={animal?.age}
                        onChange={ageChange}
                    />
                    <Input
                        type="number"
                        name="price"
                        value={animal?.price}
                        onChange={priceChange}
                    />
                    <div className="btnContainer">
                        <button type="reset" onClick={closeModal}>
                            Cancel
                        </button>
                        <button type="submit" onClick={submitForm}>
                            {animal ? "Update" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormModal;
