import React from 'react';

const Tag = (props) =>{
return (
    <div>
    <h3 onClick={props.click}> {props.name} is {props.yrs} years old company</h3>
    <p>{props.children}</p>
    </div>
)
};

export default Tag;