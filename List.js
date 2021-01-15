// List.js

import React from 'react';
import ListItem from '../components/ListItem';

class List extends React.Component {
  render() { 
    const listItems = (props) => {
      this.props.list.map((item) => 
      <ListItem 
        key={item.id}
        item={item.title}
      />) 
      }

      return (
        <div>
          <ul>
            {listItems}
          </ul>
        </div>
      )
     
  }

}

export default List;