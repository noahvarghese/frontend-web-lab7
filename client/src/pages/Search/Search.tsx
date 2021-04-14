/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/

import React, { ChangeEvent, useState } from "react";
import "./Search.css";
import SearchImage from "../../img/Search.png";
import Table from "../../components/Table/Table";
import { Animal } from "../../models/Animal";
import { SearchPermalink } from "../../lib/Permalink";
import Logs, { LogLevels } from "../../lib/Logs";

interface SearchProps {
    animals: Animal[];
}

const Search: React.FC<SearchProps> = ({ animals }) => {
    const [searchResults, setSearchResults] = useState<Animal[]>(animals);

    const search = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const searchValue = e.currentTarget.value;

        if (searchValue) {
            const result = await fetch(
                SearchPermalink + encodeURIComponent(searchValue)
            );

            if (result.status === 200) {
                const data = await result.json();
                Logs.addLog(data, LogLevels.DEBUG);
                setSearchResults(data);
                return;
            }
        }
        setSearchResults(animals);
    };
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
                            onChange={search}
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
                <Table animals={searchResults} />
            </div>
        </div>
    );
};

export default Search;
