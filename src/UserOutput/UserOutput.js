import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="cardStyle">
            <p></p>
            <p>{props.children} {props.userName}</p>          
            <p>Some dummy text to go here.</p>
        </div>
    );
}

export default UserOutput;