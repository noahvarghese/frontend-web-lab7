/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
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
    const classes = `Row ${editable && "editable"}`;
    return (
        <tr className={classes}>
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
