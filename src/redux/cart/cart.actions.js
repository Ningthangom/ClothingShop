
import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    // NO NEED TO PASS PAYLOAD HER AS 
    // WE DO NOT NEED TO USE IT IN REDUCER
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})