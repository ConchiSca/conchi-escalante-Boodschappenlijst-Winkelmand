import React from 'react'
import List from './List'


const GroceryList = (props) => {
    return (
        <div className='grocery-list'>
            <h1>Grocery List</h1>
            <List list={props.list} />

        </div>
    )
}


export default GroceryList

// click={props.clickItem} 