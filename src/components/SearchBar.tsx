import { useState } from 'react';
import './searchbar.css';
import { FaSearchengin } from "react-icons/fa6";

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <div className="searchBarContainer">
            <input type="text" placeholder="Cerca..." className='searchBar' onChange={handleChange}/>
            <FaSearchengin className="searchIcon" />
        </div>

    );
};

export default SearchBar;
