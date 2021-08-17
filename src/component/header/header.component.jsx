
import React from 'react';
import {Link} from 'react-router-dom';
// how to import svg 
import {ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'


// this header component will be functional component 

const Header = () => (
    <div className="header">   
    <Link to ="/" className="logo-container">
            <Logo/>
    </Link>
    <div className="options">
            <Link to="/shop"  className="option"> SHOP</Link>
            <Link to="/shop"  className="option"> CONTACT</Link>
    </div>
    </div>
)

export default Header;