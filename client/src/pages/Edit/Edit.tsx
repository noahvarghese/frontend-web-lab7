import React from "react";
import Row from "../../components/Row/Row";
import { Animal } from "../../models/Animal";
import "./Edit.css";
import Add from "../../img/add.png";

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
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Animal</th>
                            <th>Description</th>
                            <th>Age</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animals.map((animal) => (
                            <Row key={animal.id} animal={animal} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Edit;
