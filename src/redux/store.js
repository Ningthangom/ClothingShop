 import {createStore, applyMiddleware} from 'redux';

 // redux flow
 // action => middleware  => root Reducer => store => Dom changes

 // logger from redux-logger catches the action, console log it and moves it along 
 import logger from 'redux-logger';
 import rootReducer from './root-reducer';

 // setup middle ware 
 // the middle ware that store is expecting is an array 
const middlewares = [logger];


// create store
//...middlewares will spread all the methods or all of the values in middleware array into 
// applaymiddlewar function as individual arguments

// if more things are needed to be added to middle ware then, they can just be added to the array 
// the main reason for creating an array first is to easily modify the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;