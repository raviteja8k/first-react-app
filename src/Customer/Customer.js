import React from 'react';
import './Customer.css';

const customer = (props) => {
return (
    <div>
        <p className = "color-blue">Customer {props.num} has {props.wallet} dollars in his wallet!</p>
    </div>
);
}

export default customer;