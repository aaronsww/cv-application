import React from "react";
import useExpStore from "../store/useExpStore";

function ExpDisplay({index}) {
  const exp = useExpStore((state) => state.exp[index]);

  if (!exp) {
    return null;   
  }

  return (
    <div className="expSection">
      <div className="wrapper">
        <div className="title"> {exp.position}</div>
        <section>
          <div className="location"> {exp.company}</div>
          <div className="doj"> {exp.startDate}</div>
          <div>-</div>
          <div className="doe"> {exp.endDate}</div>
        </section>
      </div>
      <div className="description"> {exp.expDescription}</div>
    </div>
  );
}

export default ExpDisplay;
