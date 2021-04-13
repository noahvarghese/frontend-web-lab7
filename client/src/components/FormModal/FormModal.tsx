import React, { MouseEvent, useState } from "react";
import { Animal, AnimalFactory } from "../../models/Animal";
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
    const [formRef, setFormRef] = useState<HTMLFormElement | null>(null);

    const submitForm = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        closeModal();
        const options = { ...formRef?.elements };
        Logs.addLog(options, LogLevels.DEBUG);
        try {
            if (animal) {
                Logs.addLog("UPDATE", LogLevels.DEBUG);
                await animal.update({ id: animal?.id, ...formRef?.elements });
            } else {
                Logs.addLog("CREATE", LogLevels.DEBUG);
                await AnimalFactory(options);
            }
            await loadAnimals();
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <>
            <Blocker />
            <div className="FormModal">
                <h1>{animal ? "Update" : "Create"}</h1>
                <form ref={setFormRef}>
                    <Input type="string" name="animal" value={animal?.animal} />
                    <Input
                        type="string"
                        name="description"
                        value={animal?.description}
                    />
                    <Input type="number" name="age" value={animal?.age} />
                    <Input type="number" name="price" value={animal?.price} />
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
