import React, { useState, useEffect } from "react";
import useEduStore from "../store/useEduStore";
import EduDisplay from "./EduDisplay";

function Edu() {
  // const[eduInfo, setEduInfo] = useState({course: 'CS50: Introduction to Computer Science', uni: 'Harvard University',startDate: '2020',endDate: 'Present' })

  const edu = useEduStore((state) => state.edu);
  const setEdu = useEduStore((state) => state.setEdu);

  const [course, setCourse] = useState("");
  const [uni, setUni] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setEdu({
      ...edu,
      course,
      uni,
      startDate,
      endDate,
    });
  }, [course, uni, startDate, endDate]);

  return (
    <div className="mainContainer">
      <div className="informationContainer">
        {/* <input type='text' value={eduInfo.course} onChange={(e) => setEduInfo({...eduInfo, course : e.target.value})}/>
            <input type='text' value={eduInfo.uni} onChange={e => setEduInfo({...eduInfo, uni : e.target.value})}/>
            <input type='text' value={eduInfo.startDate} onChange={e => setEduInfo({...eduInfo, startDate : e.target.value})}/>
            <input type='text' value={eduInfo.endDate} onChange={e => setEduInfo({...eduInfo, endDate : e.target.value})}/> */}
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
        />
      </div>
      {/* <EduDisplay data={eduInfo} /> */}
    </div>
  );
}

export default Edu;
