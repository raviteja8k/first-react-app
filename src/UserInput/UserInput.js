import React from 'react';

const UserInput = (props) => {
    return(
        <div>
            <input type="text" value={props.defuserName} onChange={props.changeInput}/>
        </div>
    );
}

export default UserInput;