import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

// import connect function from  react-import { connect } from 'react-redux'
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

import HomePage from './pages/homepages/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.util';



class App extends React.Component {
  unsubscribeFromAuth = null;

  //The componentDidMount() method allows us to execute the React code 
  //when the component is already placed in the DOM (Document Object Model)
  componentDidMount() {

    // destructing setCurrentUser from props 
    const {setCurrentUser} = this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        

        userRef.onSnapshot(snapShot => {
          console.log('this is snapShot of userRef: ', snapShot)
              setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        }
      
      
 // if the above console comes back as null 
 setCurrentUser(userAuth)      
    })
  }
  // this will unsubscribe auth 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* header component is placed outside of Switch in order to have it in every page  */}
        <Header/>
  
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => this.props.currentUser ?
         (<Redirect to="/" />)
         :  (<SignInAndSignUpPage/>) } />
      </Switch>
      </div>
      
    );
  }
 
}

const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
})

// as app.js does not need current user 
// we will use mapDispatchToProps instead of mapStateToProps

const mapDispatchToProps =dispatch => ({
  //dispatch : whatever object you are passing me is 
  // going to be an action object that i am going to pass every reducer
  // this just dispatch the object 
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect (mapStateToProps,mapDispatchToProps )(App);
