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
