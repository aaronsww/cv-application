import React, { useState, useEffect } from "react";
import ExpDisplay from "./ExpDisplay";
import useExpStore from "../store/useExpStore";

function Exp() {
  // const [expInfo, setExpInfo] = useState({
  //   company: "INS ZOOM",
  //   position: "Software Engineer",
  //   start: "2018",
  //   end: "Present",
  //   expDescription:
  //     "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
  // });

  const exp = useExpStore((state) => state.exp);
  const setExp = useExpStore((state) => state.setExp);

  const [company, setCompany] = useState("Digital Ocean");
  const [position, setPosition] = useState("Software Engineer");
  const [startDate, setStartDate] = useState("2018");
  const [endDate, setEndDate] = useState("Present");
  const [expDescription, setExpDescription] = useState(
    "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commo."
  );

  useEffect(() => {
    setExp({
      ...exp,
      company,
      position,
      startDate,
      endDate,
      expDescription,
    });
  }, [company, position, startDate, endDate, expDescription]);

  return (
    <div className="mainContainer expContainer">
      <div className="informationContainer">
        <input
          type="text"
          value={exp.position}
          // onChange={(e) => setExpInfo({ ...expInfo, position: e.target.value })}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          value={company}
          // onChange={(e) => setExpInfo({ ...expInfo, company: e.target.value })}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          value={startDate}
          // onChange={(e) => setExpInfo({ ...expInfo, start: e.target.value })}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="text"
          value={endDate}
          // onChange={(e) => setExpInfo({ ...expInfo, end: e.target.value })}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <textarea
          type="text"
          value={expDescription}
          // onChange={(e) => setExpInfo({ ...expInfo, expDescription: e.target.value })
          onChange={(e) => setExpDescription(e.target.value)}
        />
      </div>
      {/* <ExpDisplay data={expInfo} /> */}
    </div>
  );
}

export default Exp;
