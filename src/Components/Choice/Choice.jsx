import React from 'react'
import './Choice.css'
function Choice(props) {
    return (
        <div className="choice">
            <span><img src={props.url} alt="choice-image"/></span>
            <span>{props.name}</span>
        </div>
    )
}

export default Choice
