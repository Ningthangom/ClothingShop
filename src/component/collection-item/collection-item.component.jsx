import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions"

// state is not needed here so 
// functional component will be used 

const CollectionItem =( { item, addItem}) => {
    const { name, price , imageUrl} = item;
    return (
    <div className="collection-item">
        <div className='image'
                style={{ 
                    backgroundImage: `url(${imageUrl})`
                }}
        />
            <div className='collection-footer'>
            <span className='name'> {name}</span>
            <span className='price'> A${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
    </div>
    )}

// all we doing here is that we are
// simply creating a function that calls a props call 'addItem' that will go into CollectionItem(function above)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
// whenever the mapDispatchToprops is called,
// it will recieve item as the property, pass it into addItem action creater 


// as we are not accepting anything as mapStatetoProps, 
// pass null as the first props
export default connect (null, mapDispatchToProps)(CollectionItem);