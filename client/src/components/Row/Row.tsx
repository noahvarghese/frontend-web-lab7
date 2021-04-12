import React from "react";
import ButtonCell from "../ButtonCell/ButtonCell";
import { Animal } from "../../models/Animal";
import "./Row.css";

interface RowProps {
    editable?: boolean;
    animal: Animal;
}

const Row: React.FC<RowProps> = ({ editable, animal }) => {
    return (
        <tr className="Row">
            <td className="id">{animal.id}</td>
            <td className="animal">{animal.animal}</td>
            <td className="description">{animal.description}</td>
            <td className="age">{animal.age}</td>
            <td className="price">{animal.price}</td>
            {editable && ButtonCell}
        </tr>
    );
};

export default Row;
