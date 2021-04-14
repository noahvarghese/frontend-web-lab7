/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import { useEffect } from "react";
import "./Blocker.css";

const Blocker = () => {
    useEffect(() => {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    });
    useEffect(() => {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }, []);
    return <div className="Blocker"></div>;
};

export default Blocker;
