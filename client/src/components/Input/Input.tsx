/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import React, { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
    name: string;
    type: "number" | "string";
    value?: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, type, value, onChange }) => {
    const id = name.split(" ").join();
    return (
        <div className="inputContainer">
            <label htmlFor={id}>{name}</label>
            <input
                type={type}
                id={id}
                name={id}
                defaultValue={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
