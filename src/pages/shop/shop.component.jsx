// we need to use data or state inside shop components, class component will be used.

import React from 'react';
import  SHOP_DATA from'./shop.data'
import CollectionPreview from '../../component/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render () {
        // destructing state/collection  
        const {collections} = this.state;
        return (
            <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps})=> (
                    <CollectionPreview key={id}{...otherCollectionProps}/>
                ))
            }
            </div>
        )
    }
}


export default ShopPage;