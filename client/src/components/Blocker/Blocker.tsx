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
