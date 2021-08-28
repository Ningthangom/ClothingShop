


import {combineReducers} from 'redux'


import userReducer from './user/user.reducer'

// full state in redux is one big json object 
// the key that represent individual states, ie actual reducers, is the actual reducers 
// that have been rewritten 
export default combineReducers({
    // key 'user' goes to userReducer
    user:userReducer,
})