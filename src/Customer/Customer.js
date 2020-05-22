import React from 'react';
import './Customer.css';

const customer = (props) => {
return (
    <div>
        <p className = "color-blue" onClick={props.click}>Customer {props.num} has {props.wallet} dollars in his wallet!</p>
        <div >{props.children}</div>
        <input type="text" value={props.num} onChange={props.inputTyped} />
    </div>
);
}

export default customer;