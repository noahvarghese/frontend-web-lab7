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
        try {
            await animal.delete();
            await loadAnimals();
        } catch (e) {
            alert(e.message);
        }
        closeModal();
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
