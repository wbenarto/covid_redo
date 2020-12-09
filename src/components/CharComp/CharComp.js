import React from 'react';

const char = (props) => {
    return (
    <div >
        <h1 onClick={props.onClick} style={props.style}>{props.letter}</h1>
        
    </div>)
}

export default char