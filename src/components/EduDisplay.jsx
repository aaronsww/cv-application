import React from "react";
import useEduStore from "../store/useEduStore";

function EduDisplay({ index }) {
  const edu = useEduStore((state) => state.edu[index]);

  if (!edu) {
    return null;
  }
  return (
    <div className="eduSection">
      <div className="wrapper">
        {/* <div className="title"> {props.data.course}</div> */}
        <div className="title"> {edu.course}</div>
        <section>
          {/* <div className="location"> {props.data.uni}</div> */}
          <div className="location"> {edu.uni}</div>
          {/* <div className="doj"> {props.data.startDate}</div> */}
          <div className="doj"> {edu.startDate}</div>
          <div>-</div>
          {/* <div className="doe">{props.data.endDate}</div> */}
          <div className="doe">{edu.endDate}</div>
        </section>
      </div>
    </div>
  );
}

export default EduDisplay;
