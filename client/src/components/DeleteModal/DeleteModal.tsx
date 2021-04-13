import React from "react";
import { Animal } from "../../models/Animal";
import Blocker from "../Blocker/Blocker";
import "./DeleteModal.css";

interface DeleteModalProps {
    animal: Animal;
    closeModal: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ animal, closeModal }) => {
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
                    <button type="submit">Delete</button>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;
