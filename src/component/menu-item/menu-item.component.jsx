
import React from 'react';
// withRouter is a higher order component 
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size,history, match, linkUrl}) => (

    <div style={{ backgroundImage: `url(${imageUrl})`}} 
            className={`${size} menu-item`}
            onClick={() =>history.push(`${match.url}${linkUrl}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                />
                <div className="content">
                    <h1  className="title">{title.toUpperCase()}</h1>
                    <span  className="subtitle">Shop Now</span>
                </div>
            </div> 
)

// if menuitem is exported with withRouter then it will now give  me access 
// to those location match and history props
export default withRouter(MenuItem);