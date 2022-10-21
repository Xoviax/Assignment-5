import React from 'react'
import Cats from "./Cat.js";
import { useState } from 'react';

const Search = ({ cats }) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <><input type="text"
            placeholder="Search by breed"
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }} />
            {cats.filter((val) => {
                if (searchTerm == "") {
                    return val;
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((c, k) => (
                <Cats key={k} cat={c} />
            ))}</>
    )
}

export default Search;