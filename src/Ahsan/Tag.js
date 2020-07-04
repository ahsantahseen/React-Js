import React from "react";
import "./Tag.css";

const Tag = (props) => {
  return (
    <div className="card">
      <h3 onClick={props.click}>
        {props.name} is {props.yrs} years old company
        {""}
      </h3>
      <p>{props.children}</p>
      <input onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default Tag;
