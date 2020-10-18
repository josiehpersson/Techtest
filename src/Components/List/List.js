import React from 'react';
import Data from '../../DataSource/Data';
import ListItem from '../ListItem/ListItem';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import './list.css';

function List(props) {
  let showListItem = [];
  for (let i = 0; i < Data.length; i++) {
    showListItem.push(
      <ListItem
        id={Data[i].price}
        key={[i]}
        showListItem={Data[i]}
        name={Data[i].name}
        price={Data[i].price}
        reviews={Data[i].reviews}
        address={Data[i].address}
      />
    );
  }

  const handleChange = (event) => {
    event.preventDefault();
    let filter = event.target.value;
    getListItems(filter);
  };

  const getListItems = (value) => {
    const list = document.querySelectorAll('.list-item');
    for (let i = 0; i < list.length; i++) {
      if (list[i].id <= value) {
        list[i].style.display = 'inline-flex';
      } else {
        list[i].style.display = 'none';
      }
    }
  };

  return (
    <div className="list">
      <Header />
      <Filter onChange={handleChange} />
      {showListItem}
    </div>
  );
}

export default List;
