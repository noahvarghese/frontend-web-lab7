import React from "react";
import "./Search.css";
import SearchImage from "../../img/Search.png";
import Table from "../../components/Table/Table";
import { Animal } from "../../models/Animal";

interface SearchProps {
    animals: Animal[];
}

const Search: React.FC<SearchProps> = ({ animals }) => {
    return (
        <div className="Search">
            <div className="searchBar">
                <div className="searchComponent">
                    <label className="lblSearch">Search</label>
                    <div className="searchInputContainer">
                        <input
                            className="searchBarInput"
                            id="searchInput"
                            type="text"
                        />
                        <button type="button" className="searchIcon">
                            <img
                                src={SearchImage}
                                title="Search"
                                alt="Search"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <Table animals={animals} />
            </div>
        </div>
    );
};

export default Search;
