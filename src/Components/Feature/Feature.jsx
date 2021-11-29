import React from 'react'
import './Feature.css'
function Feature(props) {
    return (
        <div className="feature">
            <span><img src={props.url} alt="feature-image"/></span>
            <span>{props.name}</span>
        </div>
    )
}

export default Feature
