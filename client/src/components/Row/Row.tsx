import React from "react";
import ButtonCell from "../ButtonCell/ButtonCell";
import { Animal } from "../../models/Animal";
import "./Row.css";

interface RowProps {
    editable?: boolean;
    animal: Animal;
    setEdit?: (id: number) => void;
    setDelete?: (id: number) => void;
}

const Row: React.FC<RowProps> = ({ editable, animal, setEdit, setDelete }) => {
    return (
        <tr className="Row">
            <td className="id">{animal.id}</td>
            <td className="animal">{animal.animal}</td>
            <td className="description">{animal.description}</td>
            <td className="age">{animal.age}</td>
            <td className="price">{animal.price}</td>
            {editable && (
                <ButtonCell
                    id={animal.id!}
                    setEdit={() =>
                        typeof setEdit !== undefined && setEdit!(animal.id!)
                    }
                    setDelete={() =>
                        typeof setDelete !== undefined && setDelete!(animal.id!)
                    }
                />
            )}
        </tr>
    );
};

export default Row;
