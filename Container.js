// Mijn Container so far...

import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

        groceryItems: [
            { id: 1, title: "avocado" },
            { id: 2, title: "kimchi" },
            { id: 3, title: "brood" },
        ],

        shoppingListItems: [
            { id: 1, title: "havermelk", amount: 1 },
            { id: 2, title: "eieren", amount: 1 },
            { id: 3, title: "geitenkaas",amount: 1 },
        ]
        }  
    }

    render() {
        return (
            <div className="container">
                <GroceryList
                    list={this.state.groceryItems}
                    className="grocery-list"
                />
                <ShoppingCart
                    list={this.state.shoppingListItems}
                    className="shopping-cart"
                />
            </div>
            )
        }
}
    

export default Container