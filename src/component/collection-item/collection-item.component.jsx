import React from 'react';

import './collection-item.styles.scss';

// state is not needed here so 
// functional component will be used 

const CollectionItem =( { id, name, price , imageUrl}) => (
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
    </div>
)

export default CollectionItem;