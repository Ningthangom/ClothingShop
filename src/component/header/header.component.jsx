
import React from 'react';
import {Link} from 'react-router-dom';

// connect function is a higher order component that let us modify our component 
// to have access to things related to redux
import {connect } from 'react-redux';
// how to import svg 
import {ReactComponent as Logo } from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss'


// this header component will be functional component 

const Header = ({currentUser}) => (
  
    <div className="header">   
    <Link to ="/" className="logo-container">
            <Logo/>
    </Link>
    <div className="options">
            <Link to="/shop"  className="option"> SHOP</Link>
            <Link to="/shop"  className="option"> CONTACT</Link>
         {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    </div>
)

// this state is top level root reducer
const mapStateToProps =state =>( {

    // s     rootreducer=>user value(this will give us userreducer) => currentUser 
  currentUser:  state.user.currentUser
});
export default connect(mapStateToProps)(Header);