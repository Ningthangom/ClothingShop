import React from 'react'
import './custom-button.styles.scss'

// inverted class buttons are for add to cart
const CustomButton = ({children,isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted': '' } ${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
            {children}
    </button>
)

export default CustomButton;