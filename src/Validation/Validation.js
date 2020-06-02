import React from 'react';
import './Validation.css';

const validation = (props) => {
return (
    <div>
        <p className="color-blue">Text {props.strlen<5 ? 'too short' : 'long enough'}</p>
        <div></div>        
    </div>
);
}

export default validation;