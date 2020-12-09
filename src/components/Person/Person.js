import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <h3 onClick={props.click}>My name is {props.text} and I'm {props.length} letters long.</h3>
    <h4>See : {props.warning}</h4>
            <input type='text' onChange={props.change}  ></input>
        </div>
    
    )
}

export default person;