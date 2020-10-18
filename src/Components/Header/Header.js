import React from 'react';
import ChevronLeft from '../Icons/chevron-left-gold.png';
import Filter from '../Icons/filter.png';
import './header.css';

function Header() {
  return (
    <div className="header">
      <img src={ChevronLeft} alt="left-arrow-icon" />
      <p>Hår</p>
      <img src={Filter} alt="filter-icon" />
    </div>
  );
}

export default Header;
