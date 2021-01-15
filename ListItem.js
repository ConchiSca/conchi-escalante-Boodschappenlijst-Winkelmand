// ListItem

import React from 'react';


const ListItem = (props) => {
    const item = props.item
    return (
        <li 
        className="list-item" 
        key={item.id} 
        value={item.title}
        > 
            {item.title} 
        </li>   
    )
};

export default ListItem;