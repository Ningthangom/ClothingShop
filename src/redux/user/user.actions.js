
import {UserActionTypes} from './user.types'
export const setCurrentUser = user => ({
    // SET_CURRENT_USER is the exact same string that switch statement 
    // in reducer is expecting
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})