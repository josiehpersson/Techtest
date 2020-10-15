import React from 'react';
import {Link, Route} from 'react-router-dom';
import Page from '../Page/Page';
import ChevronRight from '../Icons/chevron-right-gold.png';

function ListItem(props) {
  return (
    <>
      <div className="list-item">
        <div className="column-1">
          <p className="primary-text">12.00</p>
        </div>

        <div className="column-2">
          <p className="headline">{props.name}</p>
          <div className="reviews">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <p className="secondary-text">({props.reviews})</p>
          </div>
          <p className="secondary-text">{props.address}</p>
        </div>

        <div className="column-3">
          <p className="primary-text">{props.price} kr</p>
          <p className="secondary-text">30 min</p>
        </div>
        
        <Link to="/Page">
      <div className="chevron-btn">
        <img src={ChevronRight} alt="right-arrow-icon" className="arrow-icon"/>
      </div>
        </Link>
      </div>
      <div className="divider"></div>

    </>
  );
}

export default ListItem;
