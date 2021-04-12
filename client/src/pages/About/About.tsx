import React from "react";
import "./About.css";
import NoahsArk from "../../img/noahsark.jpg";

const About = () => {
    return (
        <div className="About">
            <div className="hero">
                <img src={NoahsArk} alt="Noah's Ark" />
                <div className="heroOverlay">
                    <h1>Noah's Ark</h1>
                    <h2>Pet Store</h2>
                    <p>
                        A pet store management system for "Noah's Ark" pet
                        store.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
