import React, { useState, useEffect } from "react";
import ExpDisplay from "./ExpDisplay";
import useExpStore from "../store/useExpStore";

function Exp({ index }) {
  const exp = useExpStore((state) => state.exp[index]);
  const setExp = useExpStore((state) => state.setExp);

  const [company, setCompany] = useState("Digital Ocean");
  const [position, setPosition] = useState("Software Engineer");
  const [startDate, setStartDate] = useState("2018");
  const [endDate, setEndDate] = useState("Present");
  const [expDescription, setExpDescription] = useState(
    "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commo."
  );


  useEffect(() => {
    setExp(index, {
      company,
      position,
      startDate,
      endDate,
      expDescription,
    });
  }, [company, position, startDate, endDate, expDescription]);

  return (
    <div className="sectionContianer expContainer">
      <div className="informationContainer topBox">
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <textarea
          type="text"
          value={expDescription}
          onChange={(e) => setExpDescription(e.target.value)}
          className="endBox"
        />
      </div>
    </div>
  );
}

export default Exp;
