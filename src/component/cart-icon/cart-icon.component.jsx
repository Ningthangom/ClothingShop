
import React from 'react';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {selectorCartItemsCount} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss'


const CartIcon =({toggleCartHidden, itemCount})=> (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />

        <span className="item-count">{itemCount}</span>

    </div>

)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
// we are getting cartitems from cart state 
// this state also add the quantity of all the items added to cart
const mapStateToProps = createStructuredSelector({
  
    itemCount:selectorCartItemsCount
   
})




export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);