
export const setCurrentUser = user => ({
    // SET_CURRENT_USER is the exact same string that switch statement 
    // in reducer is expecting
    type: 'SET_CURRENT_USER',
    payload: user
})