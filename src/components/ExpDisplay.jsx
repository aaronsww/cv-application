import React from "react";

function ExpDisplay(props) {
  return (
    <div className="wholeSection">
      <div className="wrapper">
        <div className="title"> {props.data.position}</div>
        <section>
          <div className="location"> {props.data.company}</div>
          <div className="doj"> {props.data.start}</div>
          <div>-</div>
          <div className="doe"> {props.data.end}</div>
        </section>
      </div>
      <div className="description"> {props.data.expDescription}</div>
    </div>
  );
}

export default ExpDisplay;
