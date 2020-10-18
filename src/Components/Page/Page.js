import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ChevronDown from '../Icons/chevron-down-gold.png';
import ChevronLeft from '../Icons/chevron-left-white.png';
import ChevronRight from '../Icons/chevron-right-gold.png';
import StarFilled from '../Icons/star-filled.png';
import StarOutlined from '../Icons/star-outlined.png';
import Heart from '../Icons/heart.png';
import MapPin from '../Icons/map-pin.png';
import Clock from '../Icons/clock.png';
import Phone from '../Icons/phone.png';
import Website from '../Icons/website.png';

import './page.css';

function Page(props) {
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState('');
  const [address, setAddress] = useState('');

  const getInfo = () => {
    let getName = localStorage.Name;
    let getReviews = localStorage.Reviews;
    let getAddress = localStorage.Address;

    setName(getName);
    setReviews(getReviews);
    setAddress(getAddress);
  };
  useEffect(() => {
    setInterval(getInfo(), 1000);
  });

  const handleClick = (event) => {
    if(event.target.classList.contains('tab-list-item')) {
      event.target.classList.toggle('tab-list-item-active')
    }
  }
  return (
    <div className="page-container">
      <div className="picture-container">
        <div className="icon-container">
          <Link to="/">
            <button className="chevron-btn">
              <img src={ChevronLeft} alt="left-arrow-icon"></img>
            </button>
          </Link>
          <img src={Heart} alt="heart-icon"></img>
        </div>

        <div className="headline-information">
          <p className="headline">{name}</p>
          <div className="reviews">
            <img src={StarFilled} alt="filled-star-icon"></img>
            <img src={StarFilled} alt="filled-star-icon"></img>
            <img src={StarFilled} alt="filled-star-icon"></img>
            <img src={StarFilled} alt="filled-star-icon"></img>
            <img src={StarOutlined} alt="outlined-star-icon"></img>
            <p className="secondary-text">({reviews})</p>
          </div>
        </div>
      </div>
      <div className="information-container">
        <Tabs className="tabs">
          <TabList className="tab-list">
            <Tab className="tab-list-item" onClick={handleClick}>Info</Tab>
            <Tab className="tab-list-item" onClick={handleClick}>Schema</Tab>
          </TabList>

          <TabPanel className="tab-content">
            <div className="tab-item" id="information">
              <div className="information">
                <img src={MapPin} alt="map-pin-icon"></img>
                <p>{address}, 11357 Stockholm</p>
              </div>

              <div className="divider"></div>

              <div className="information">
                <img src={Clock} alt="clock-icon"></img>
                <p>Öppet till 19:00 idag </p>
                <img
                  src={ChevronDown}
                  className="chevron-down"
                  alt="arrow-down-icon"
                ></img>
              </div>

              <div className="divider"></div>

              <div className="information">
                <img src={Phone} alt="phone-icon"></img>
                <p>08-522 389 20</p>
              </div>
              <div className="divider"></div>
              <div className="information">
                <img src={Website} alt="website-icon"></img>
                <p>www.salongweb.se</p>
              </div>
              <div className="divider"></div>
              <p>
                Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra.
                Rodoculus feugiat nunc porttitor volut pat, acu quis torquet
                iaculis ultricies massa, duis nun quis que amet.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab-item" id="schema">
              <div className="time-table">
                <img src={ChevronRight} alt="right-arrow-icon"></img>
                <p>12.00</p> <p>Klippning</p> <p>350 kr</p>
              </div>
              <div className="divider"></div>
              <div className="time-table">
                <img src={ChevronRight} alt="right-arrow-icon"></img>
                <p>12.00</p> <p>Klippning</p> <p>350 kr</p>
              </div>
              <div className="divider"></div>
              <div className="time-table">
                <img src={ChevronRight} alt="right-arrow-icon"></img>
                <p>12.00</p> <p>Klippning</p> <p>350 kr</p>
              </div>
              <div className="divider"></div>
              <div className="time-table">
                <img src={ChevronRight} alt="right-arrow-icon"></img>
                <p>12.00</p> <p>Klippning</p> <p>350 kr</p>
              </div>
              <div className="divider"></div>
              <div className="time-table">
                <img src={ChevronRight} alt="right-arrow-icon"></img>
                <p>12.00</p> <p>Klippning</p> <p>350 kr</p>
              </div>
              <div className="divider"></div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Page;
