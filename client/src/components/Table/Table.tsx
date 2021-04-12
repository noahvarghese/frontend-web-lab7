import React from "react";
import Row from "../../components/Row/Row";
import { Animal } from "../../models/Animal";
import "./Table.css";

interface TableProps {
    editable?: boolean;
    animals: Animal[];
}
const Table: React.FC<TableProps> = ({ editable, animals }) => {
    return (
        <table className="Table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Animal</th>
                    <th>Description</th>
                    <th>Age</th>
                    <th>Price</th>
                    {editable && (
                        <>
                            <th>Edit</th>
                            <th>Delete</th>
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {animals.map((animal) => (
                    <Row key={animal.id} animal={animal} editable={editable} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
