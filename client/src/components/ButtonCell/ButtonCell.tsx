import React from "react";

interface ButtonCellProps {
    id: number;
    setEdit: (id: number) => void;
    setDelete: (id: number) => void;
}

const ButtonCell: React.FC<ButtonCellProps> = ({ id, setEdit, setDelete }) => {
    return (
        <>
            <td onClick={() => setEdit(id)}>Edit</td>
            <td onClick={() => setDelete(id)}>Delete</td>
        </>
    );
};

export default ButtonCell;
