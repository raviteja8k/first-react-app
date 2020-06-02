import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="cardStyle" >
            <p onClick = {props.click} style={{color:'blue', fontWeight: 'bold', cursor: 'pointer'}}>{props.children} {props.cname}</p>   
            <input onChange={props.change} value={props.cname} />
            <p className="justPara">Wallet balance: {props.cwallet}</p>       
            <p className="justPara">Some dummy text to go here.</p>
        </div>
    );
}

export default UserOutput;