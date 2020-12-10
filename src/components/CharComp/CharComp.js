import React from 'react';
import { ActionInfoOutline } from 'material-ui/svg-icons';

const charComp = (props) => {
    const style = {
        display: 'inline-block',
        border: '5px black dotted',
        backgroundColor: 'lightblue',
        fontColor: 'cyan',
        padding: '20px',
        margin: '20px',
        width: '50px'
    }
    return (
        <div >
            {
                (props.letter.length > 0) ? (
                    [...props.letter].map((e,i)=>{
                    return <h4 style={style}>{e}</h4>
                    })
                )
                : null
            
            }
        </div>
        
            
    )
}

export default charComp;