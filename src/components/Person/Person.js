import React from 'react';

const person = (props) => {

    return (
        <div>
            <h2>This is person</h2>
            <button 
            data={props.data}
            toggle={props.toggle}
            onClick={props.onClick}>Show Assignment</button>
           
        </div>
    )
}

export default person;