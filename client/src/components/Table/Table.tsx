/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import React from "react";
import Row from "../../components/Row/Row";
import { Animal } from "../../models/Animal";
import "./Table.css";

interface TableProps {
    editable?: boolean;
    animals: Animal[];
    setEdit?: (id: number) => void;
    setDelete?: (id: number) => void;
}
const Table: React.FC<TableProps> = ({
    editable,
    animals,
    setDelete,
    setEdit,
}) => {
    const classes = `Table ${editable && "editable"}`;

    return (
        <table className={classes}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Animal</th>
                    <th>Description</th>
                    <th>Age</th>
                    <th>Price</th>
                    {editable && <th></th>}
                </tr>
            </thead>
            <tbody>
                {animals.map((animal) => (
                    <Row
                        key={animal.id}
                        animal={animal}
                        editable={editable}
                        setEdit={setEdit}
                        setDelete={setDelete}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
