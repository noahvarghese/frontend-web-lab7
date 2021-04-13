import React from "react";
import { Animal } from "../../models/Animal";
import Input from "../Input/Input";
import Blocker from "../Blocker/Blocker";
import "./FormModal.css";

interface FormModalProps {
    animal?: Animal;
    closeModal: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ animal, closeModal }) => {
    return (
        <>
            <Blocker />
            <div className="FormModal">
                <h1>{animal ? "Update" : "Create"}</h1>
                <form>
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
                        <button type="submit">
                            {animal ? "Update" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormModal;
