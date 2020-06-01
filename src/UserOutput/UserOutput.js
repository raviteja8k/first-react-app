import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="cardStyle" onClick = {props.click}>
            <p style={{color:'blue', fontWeight: 'bold'}}>{props.children} {props.cname}</p>   
            <p className="justPara">Wallet balance: {props.cwallet}</p>       
            <p className="justPara">Some dummy text to go here.</p>
        </div>
    );
}

export default UserOutput;