import React from 'react';
import './Person.css';
/*
    to access props in classes use this.props
*/
const person = (props) => {
    return (
        <div className="main-div">
            <h1>I'm {props.name} {props.age}</h1>
            <p>{props.children}</p>
            <p onClick={props.clickHandler} hidden={(props.clickHandler)?false:true} >Change name</p>
            {/* 2 way binding */}
            <input type="text" name="txtName" id="" onChange={props.changed} value={props.name} hidden={(props.changed)?false:true}/>
            <hr hidden={props.hr_visible} />
        </div>
    )
}

export default person;