import React, { useState } from "react";
import { Animal } from "../../models/Animal";
import "./Edit.css";
import Add from "../../img/add.png";
import Table from "../../components/Table/Table";
import FormModal from "../../components/FormModal/FormModal";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

interface EditProps {
    animals: Animal[];
    loadAnimals: () => Promise<void>;
}

const Edit: React.FC<EditProps> = ({ animals, loadAnimals }) => {
    const [animal, setAnimal] = useState<Animal | undefined>(undefined);

    const [modalDisplays, setModalDisplays] = useState({
        formModal: false,
        deleteModal: false,
    });

    const toggleDeleteModal = () => {
        setModalDisplays({
            deleteModal: !modalDisplays.deleteModal,
            formModal: false,
        });
    };

    const toggleFormModal = () =>
        setModalDisplays({
            deleteModal: false,
            formModal: !modalDisplays.formModal,
        });

    const setDelete = (id: number) => {
        setAnimal(animals.find((animal) => animal.id === id));
        toggleDeleteModal();
    };

    const setEdit = (id: number) => {
        setAnimal(animals.find((animal) => animal.id === id));
        toggleFormModal();
    };

    return (
        <div className="Edit">
            <div className="container">
                <div className="addPet">
                    <button
                        className="imageContainer"
                        onClick={toggleFormModal}
                    >
                        <img src={Add} className="addImg" alt="Add Pet" />
                    </button>
                </div>
                <Table
                    animals={animals}
                    setEdit={setEdit}
                    setDelete={setDelete}
                    editable
                />
            </div>
            {modalDisplays.formModal && (
                <FormModal
                    animal={animal}
                    closeModal={toggleFormModal}
                    loadAnimals={loadAnimals}
                />
            )}
            {modalDisplays.deleteModal && (
                <DeleteModal
                    animal={animal!}
                    closeModal={toggleDeleteModal}
                    loadAnimals={loadAnimals}
                />
            )}
        </div>
    );
};

export default Edit;
