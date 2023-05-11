import React, { useState, useEffect } from "react";
import useEduStore from "../store/useEduStore";
import EduDisplay from "./EduDisplay";

function Edu({ index }) {

  const edu = useEduStore((state) => state.edu[index]);
  const setEdu = useEduStore((state) => state.setEdu);

  const [course, setCourse] = useState(
    "CS50: Introduction to Computer Science"
  );
  const [uni, setUni] = useState("Harvard University");
  const [startDate, setStartDate] = useState("2020");
  const [endDate, setEndDate] = useState("Present");

  useEffect(() => {
    setEdu(index, {
      course,
      uni,
      startDate,
      endDate,
    });
  }, [course, uni, startDate, endDate]);

  return (
    <div className="sectionContianer">
      <div className="informationContainer topBox">
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="text"
          value={uni}
          onChange={(e) => setUni(e.target.value)}
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
          className="endBox"
        />
      </div>
    </div>
  );
}

export default Edu;
