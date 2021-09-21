
// the purpose of this code is to make sure the same item is not added 
// multiple times but increase the quantity instead 

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem =>cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {
                ...cartItem, quantity: cartItem.quantity +1 } 
                : cartItem
            )
    }

    // if item is not found in cartItem array 
    // then return the existing cartitem and aslo add cartItemToAdd 
    // except give a base quantity of 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id )

        // if cartitem quantity is equal to 1 then remove it 
        if(existingCartItem.quantity === 1 ) {
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
        }

        // if cartitem is not requal to 1 then map all the cart item and reduce quanity by 1
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? 
             { ...cartItem, quantity: cartItem.quantity -1  }
             : cartItem
            )

}


