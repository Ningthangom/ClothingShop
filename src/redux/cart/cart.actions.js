
import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    // NO NEED TO PASS PAYLOAD HER AS 
    // WE DO NOT NEED TO USE IT IN REDUCER
})