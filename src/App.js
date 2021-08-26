import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepages/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.util';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  //The componentDidMount() method allows us to execute the React code 
  //when the component is already placed in the DOM (Document Object Model)
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        

        userRef.onSnapshot(snapShot => {
          console.log('this is snapShot of userRef: ', snapShot)
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log('check state', this.state)
          })
        })
      
      }else {
 // if the above console comes back as null 
 this.setState({currentUser:userAuth})
 console.log('this is new state', this.state)
      
      }
     
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
        <Header currentUser={this.state.currentUser}/>
  
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </div>
      
    );
  }
 
}


export default App;
