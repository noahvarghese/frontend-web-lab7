import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.png";
import "./Nav.css";

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li>
                    <img src={Logo} alt="Logo" />
                </li>
                <li>
                    <NavLink to="/" activeClassName="active" exact>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/edit" activeClassName="active" exact>
                        Edit
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" activeClassName="active" exact>
                        Search
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
