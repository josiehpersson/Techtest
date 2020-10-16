import React, {useState} from 'react';
import './list.css';

function Filter(props) {
    const [filter, setFilter] = useState('500');
    const handleChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }
    console.log({filter});

    return (
        <form className="filter-container">
            <select type="dropdown" onChange={handleChange}>
                <option value="500">0-500 kr</option>
                <option value="400">0-400 kr</option>
                <option value="300">0-300 kr</option>
                <option value="200">0-200 kr</option>
                <option value="100">0-100 kr</option>

            </select>
        </form>
    )
}

export default Filter;