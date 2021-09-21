

import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'


    const INITIAL_STATE = {
        hidden: true,
        cartItems: [ ]
    }

    const cartReducer =(state = INITIAL_STATE, action ) => {
        switch (action.type) {
            case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.ADD_ITEM: 
            return {
                ...state,
                // showing previous state then add new item
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            case CartActionTypes.REMOVE_ITEM: 
            return {
                ...state, 
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
                // filter returns anything that yells true 
                // if the cartitem id is not the same as the one that needs to be removed ,
                // it will keep it 
                return {
                    ...state, 
                    cartItems: state.cartItems.filter(
                        cartItem => cartItem.id !== action.payload.id)
                }

            default:
                return state;
        }
    }


    export default cartReducer