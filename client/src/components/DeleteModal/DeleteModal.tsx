/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import React from "react";
import { Animal } from "../../models/Animal";
import Blocker from "../Blocker/Blocker";
import "./DeleteModal.css";

interface DeleteModalProps {
    animal: Animal;
    closeModal: () => void;
    loadAnimals: () => Promise<void>;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
    animal,
    closeModal,
    loadAnimals,
}) => {
    const deleteModal = async () => {
        closeModal();
        try {
            await animal.delete();
            await loadAnimals();
        } catch (e) {
            alert(e.message);
        }
    };
    return (
        <>
            <Blocker />
            <div className="DeleteModal">
                <h1>Delete</h1>
                <div>
                    Are you sure you want to delete animal: {animal.animal}?
                </div>
                <div className="btnContainer">
                    <button type="reset" onClick={closeModal}>
                        Cancel
                    </button>
                    <button type="submit" onClick={deleteModal}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;
