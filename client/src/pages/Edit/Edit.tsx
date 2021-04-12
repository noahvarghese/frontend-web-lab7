import React from "react";
import { Animal } from "../../models/Animal";
import "./Edit.css";
import Add from "../../img/add.png";
import Table from "../../components/Table/Table";

interface EditProps {
    animals: Animal[];
}

const Edit: React.FC<EditProps> = ({ animals }) => {
    return (
        <div className="Edit">
            <div className="container">
                <div className="addPet">
                    <button className="imageContainer">
                        <img src={Add} className="addImg" alt="Add Pet" />
                    </button>
                </div>
                <Table animals={animals} editable />
            </div>
        </div>
    );
};

export default Edit;
