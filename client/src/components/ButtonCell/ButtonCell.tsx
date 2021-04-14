/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import React from "react";
import "./ButtonCell.css";

interface ButtonCellProps {
    id: number;
    setEdit: (id: number) => void;
    setDelete: (id: number) => void;
}

const ButtonCell: React.FC<ButtonCellProps> = ({ id, setEdit, setDelete }) => {
    return (
        <td className="ButtonCell">
            <button className="Edit" onClick={() => setEdit(id)}>
                Edit
            </button>
            <button className="Delete" onClick={() => setDelete(id)}>
                Delete
            </button>
        </td>
    );
};

export default ButtonCell;
