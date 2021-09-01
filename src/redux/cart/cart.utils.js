
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
}
