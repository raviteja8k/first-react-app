import React from 'react';
import './Char.css';

const Char = (props) => {
    //const splitString = props.displayString.split('');
    return(
            <div className='chardiv' onClick={props.clicked}>
                {props.displayString}
            </div>);
}

export default Char;