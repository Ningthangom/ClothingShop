
import React from 'react';
import {Link} from 'react-router-dom';

// connect function is a higher order component that let us modify our component 
// to have access to things related to redux
import {connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// how to import svg 
import {ReactComponent as Logo } from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector';
import './header.styles.scss'


// this header component will be functional component 

const Header = ({currentUser, hidden }) => (
  
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
    {hidden ? null : 
      <CartDropDown/>}
    
    </div>
)

// this state is top level root reducer
/* const mapStateToProps =(state) =>( {

    // s     rootreducer=>user value(this will give us userreducer) => currentUser 
  currentUser:selectCurrentUser(state),
  hidden: selectCartHidden(state)
});
 */

// the below code is the same as the above code 
// but structuredSelector is used 
const mapStateToProps = createStructuredSelector( {

  // s     rootreducer=>user value(this will give us userreducer) => currentUser 
currentUser:selectCurrentUser,
hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);