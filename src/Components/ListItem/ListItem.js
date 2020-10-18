import React from 'react';
import './listitem.css';
import { Link } from 'react-router-dom';
import FilledStar from '../Icons/star-filled.png';
import OutlinedStar from '../Icons/star-outlined.png';
import ChevronRight from '../Icons/chevron-right-gold.png';

function ListItem(props) {
  const handleClick = () => {
    localStorage.Name = props.name;
    localStorage.Reviews = props.reviews;
    localStorage.Address = props.address;
  };
  return (
    <>
      <div className="list-item" id={props.price}>
        <div className="list-item-info">
          <div className="column-1">
            <p>12.00</p>
          </div>

          <div className="column-2">
            <p className="headline">{props.name}</p>
            <div className="reviews">
              <img src={FilledStar} alt="filled-star-icon"></img>
              <img src={FilledStar} alt="filled-star-icon"></img>
              <img src={FilledStar} alt="filled-star-icon"></img>
              <img src={FilledStar} alt="filled-star-icon"></img>
              <img src={OutlinedStar} alt="outlined-star-icon"></img>
              <p className="secondary-text">({props.reviews})</p>
            </div>
            <p>{props.address}</p>
          </div>

          <div className="column-3">
            <p>{props.price} kr</p>
            <p className="secondary-text">30 min</p>
          </div>
          <Link to="/Page">
            <button className="chevron-btn" onClick={handleClick}>
              <img
                src={ChevronRight}
                alt="right-arrow-icon"
                className="arrow-icon"
              />
            </button>
          </Link>
        </div>
        <div className="divider"></div>
      </div>
    </>
  );
}

export default ListItem;
