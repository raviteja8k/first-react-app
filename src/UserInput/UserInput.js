import React from 'react';

const UserInput = (props) => {
    return(
        <div>
            <input type="text" value={props.userName} onChange={props.changeInput}/>
        </div>
    );
}

export default UserInput;