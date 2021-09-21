
// Selectors can compute derived data, allowing Redux to store the minimal possible state.
//Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
//Selectors are composable. They can be used as input to other selectors.
import {createSelector} from 'reselect'

// there are two types of selectors: input and output 

// this input selector 
const selectCart = state => state.cart 



export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems 
    
    )

    export const selectCartHidden  = createSelector(
        [selectCart], 
        cart => cart.hidden
    )


export const selectorCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalatedQuantity,cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems], 
    cartItems => 
    cartItems.reduce(
        (accumalatedQuantity,cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
)