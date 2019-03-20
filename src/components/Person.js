import React from 'react';

/*
    to access props in classes use this.props
*/
const person = (props) => {
    return (
        <div>
            <h1>I'm {props.name} {props.age}</h1>
            <hr hidden={props.hr_visible} />
            <p>{props.children}</p>
            <p onClick={props.clickHandler} hidden={(props.clickHandler)?false:true} >Change name</p>
        </div>
    )
}

export default person;