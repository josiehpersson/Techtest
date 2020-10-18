import React from 'react';
import './filter.css';

function Filter(props) {
  return (
    <form className="filter-container">
      <select type="dropdown" onChange={props.onChange}>
        <option className="filter-option" value="500">
          0-500 kr
        </option>
        <option className="filter-option" value="400">
          0-400 kr
        </option>
        <option className="filter-option" value="300">
          0-300 kr
        </option>
        <option className="filter-option" value="200">
          0-200 kr
        </option>
        <option className="filter-option" value="100">
          0-100 kr
        </option>
      </select>
    </form>
  );
}

export default Filter;
