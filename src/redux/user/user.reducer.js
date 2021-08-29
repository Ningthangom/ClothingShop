  
  import { UserActionTypes } from "./user.types";
  
  
  // type: a string value: action type 
   // payload: can be anything 
   const INITIAL_STATE = {
      currentUser:null
   }

   // user = INITIAL_STATE: user's initial state OR default value is currentUser as null
   // null is a valid value and will be accepted as a state
   const userReducer = (state = INITIAL_STATE , action) => {
      switch(action.type){
         //whenever SET_CURRENT_USER IS action.type that gets fired 
         case UserActionTypes.SET_CURRENT_USER:
            // then return a new object which represent a new state that userReducer is going 
            // to transformed into
            return {
               // every thing that was on state 
               ...state,
               // then set currnet user 
               currentUser: action.payload,
            }
         // the reason for default case is if none of action type matched inside switch 
         // statement then just return the state 
         default:
            return state;
      }
   }



   export default userReducer;