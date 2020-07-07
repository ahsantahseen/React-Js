import React from "react";
import Radium from "radium";
import "./Tag.css";

const Tag = (props) => {
  const style = {
    "@media(min-width:500px)": { width: "450px" },
  };
  return (
    <div className="card" style={style}>
      <h3 onClick={props.click}>
        {props.name} is {props.yrs} years old company
        {""}
      </h3>
      <p>{props.children}</p>
      <input onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default Radium(Tag);
