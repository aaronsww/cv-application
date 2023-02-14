import React, { useState } from "react";
import ExpDisplay from "./ExpDisplay";

function Exp() {
  const [expInfo, setExpInfo] = useState({
    company: "INS ZOOM",
    position: "Software Engineer",
    start: "2018",
    end: "Present",
    expDescription:
      "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
  });

  return (
    <div className="mainContainer">
      <fieldset>
        <legend>Work Experience</legend>
        <input
          type="text"
          value={expInfo.position}
          onChange={(e) => setExpInfo({ ...expInfo, position: e.target.value })}
        />
        <input
          type="text"
          value={expInfo.company}
          onChange={(e) => setExpInfo({ ...expInfo, company: e.target.value })}
        />
        <input
          type="text"
          value={expInfo.start}
          onChange={(e) => setExpInfo({ ...expInfo, start: e.target.value })}
        />
        <input
          type="text"
          value={expInfo.end}
          onChange={(e) => setExpInfo({ ...expInfo, end: e.target.value })}
        />
        <textarea
          type="text"
          value={expInfo.expDescription}
          onChange={(e) =>
            setExpInfo({ ...expInfo, expDescription: e.target.value })
          }
        />
      </fieldset>
      <ExpDisplay data={expInfo} />
    </div>
  );
}

export default Exp;
