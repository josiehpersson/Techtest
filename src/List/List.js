import React from 'react';
import {Route, Link} from 'react-router-dom';
import Data from '../DataSource/Data';
import ListItem from './ListItem';
import Page from '../Page/Page';
import ChevronRight from '../Icons/chevron-right-gold.png';
import './list.css';

function List(props) {
  let showListItems = [];

  for (let i = 0; i < Data.length; i++) {
    showListItems.push(
      <ListItem
        key={[i]}
        showListItem={Data[i]}
        name={Data[i].name}
        price={Data[i].price}
        reviews={Data[i].reviews}
        address={Data[i].address}
      />
    );
  }
  return (
  <div className="list">{showListItems}        
</div>
);
}

export default List;
