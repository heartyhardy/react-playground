import React from 'react';

/*
    to access props in classes use this.props
*/
const person = (props) => {
    return (
        <div>
            <h1>I'm {props.name} {props.age}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default person;